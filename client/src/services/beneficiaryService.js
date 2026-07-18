const STORAGE_KEY = "jpm_beneficiaries";

export function getBeneficiaries() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveBeneficiary(beneficiary) {
  const beneficiaries = getBeneficiaries();

  // Prevent duplicates
  const exists = beneficiaries.find(
    (item) =>
      item.accountNumber === beneficiary.accountNumber &&
      item.bank === beneficiary.bank
  );

  if (exists) return;

  beneficiaries.unshift({
    id: Date.now(),
    ...beneficiary,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(beneficiaries)
  );
}

export function deleteBeneficiary(id) {
  const beneficiaries = getBeneficiaries().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(beneficiaries)
  );
}