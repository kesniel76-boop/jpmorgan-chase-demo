import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Transfer from "../pages/Transfer";
import TransactionDetails from "../pages/TransactionDetails";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";
import AdminCustomers from "../pages/AdminCustomers";
import Cards from "../pages/Cards";
import Accounts from "../pages/Accounts";
import Statements from "../pages/Statements";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Beneficiaries from "../pages/Beneficiaries";
import AdminAccounts from "../pages/AdminAccounts";
import AdminTransfers from "../pages/AdminTransfers";
import AdminCards from "../pages/AdminCards";
import AdminSettings from "../pages/AdminSettings";
import ProtectedRoute from "../components/ProtectedRoute";
import Receipt from "../pages/Receipt";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
          <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transfer"
          element={
          <ProtectedRoute>
            <Transfer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transaction/:id"
          element={<TransactionDetails />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/customers"
          element={<AdminCustomers />}
        />

        <Route
          path="/cards"
          element={
          <ProtectedRoute>
            <Cards />
            </ProtectedRoute>
          }
        />

        <Route
          path="/accounts"
          element={
          <ProtectedRoute>
          <Accounts />
          </ProtectedRoute>
          }
        />

        <Route
          path="/statements"
          element={
          <ProtectedRoute>
          <Statements />
          </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
          <ProtectedRoute>
          <Notifications />
          </ProtectedRoute>
          }
        />

        <Route
          path="/beneficiaries"
          element={
          <ProtectedRoute>
          <Beneficiaries />
          </ProtectedRoute>
          }
        />

        <Route
          path="/admin/accounts"
          element={<AdminAccounts />}
        />

        <Route
          path="/admin/transfers"
          element={<AdminTransfers />}
        />

        <Route
          path="/admin/cards"
          element={<AdminCards />}
        />

        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />

        <Route
          path="/settings"
          element={
          <ProtectedRoute>
          <Settings />
          </ProtectedRoute>
          }
        />

        <Route
          path="/receipt"
          element={<Receipt />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;