import { getCurrentUser } from "./authService";

const PREFIX = "jpm_card_";

function generateCard(user) {
  const account = user?.accountNumber || "0000000000";
  const last4 = account.slice(-4);

  return {
    holder: user.name,
    number: `5399 8456 1023 ${last4}`,
    expiry: "09/30",
    cvv: "482",
    type: "Visa",
    frozen: false,
    dailyLimit: 500000,
  };
}

export function getCard() {
  const user = getCurrentUser();

  if (!user) return null;

  const STORAGE_KEY = PREFIX + user.customerId;

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    const card = JSON.parse(saved);

    // Update old cards created with the wrong holder
    if (
      !card.holder ||
      card.holder === "undefined undefined"
    ) {
      card.holder = user.name;

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(card)
      );
    }

    return card;
  }

  const card = generateCard(user);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(card)
  );

  return card;
}

export function updateCard(card) {
  const user = getCurrentUser();

  if (!user) return;

  localStorage.setItem(
    PREFIX + user.customerId,
    JSON.stringify(card)
  );
}