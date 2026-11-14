import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { requestAdminLogin, verifyAdminLoginOtp } from "../api/auth";
import { useAdminAuth } from "./useAdminAuth";
import "./admin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const { signIn } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const requestOtp = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);
    try {
      const result = await requestAdminLogin(email);
      setStep("otp");
      setStatus({
        type: "success",
        message: result?.message || "A sign-in code has been sent to your email.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Could not request a sign-in code.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOtp = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);
    try {
      const result = await verifyAdminLoginOtp(email, otp);
      if (typeof result?.token !== "string" || !result.token) {
        throw new Error("The login response did not include an access token.");
      }

      signIn(result.token);
      const requestedPath = location.state?.from?.pathname;
      const destination =
        requestedPath?.startsWith("/admin") && requestedPath !== "/admin/login"
          ? requestedPath
          : "/admin/team";
      navigate(destination, { replace: true });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Could not verify the sign-in code.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const changeEmail = () => {
    setStep("email");
    setOtp("");
    setStatus(null);
  };

  return (
    <main className="admin-auth-page">
      <Link className="admin-auth-brand" to="/">
        <span className="admin-brand-mark">NF</span>
        Nico Farms
      </Link>
      <section className="admin-auth-card">
        <p className="admin-auth-eyebrow">Admin portal</p>
        <h1>Sign in</h1>
        <p className="admin-auth-description">
          {step === "email"
            ? "Enter your admin email and we’ll send you a one-time sign-in code."
            : `Enter the one-time code sent to ${email}.`}
        </p>

        {step === "email" ? (
          <form className="admin-auth-form" onSubmit={requestOtp}>
            <label htmlFor="admin-login-email">Admin email</label>
            <input
              autoComplete="email"
              autoFocus
              id="admin-login-email"
              onChange={(event) => {
                setEmail(event.target.value);
                setStatus(null);
              }}
              required
              type="email"
              value={email}
            />
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Sending code..." : "Send sign-in code"}
            </button>
          </form>
        ) : (
          <form className="admin-auth-form" onSubmit={verifyOtp}>
            <label htmlFor="admin-login-otp">One-time code</label>
            <input
              autoComplete="one-time-code"
              autoFocus
              id="admin-login-otp"
              inputMode="numeric"
              onChange={(event) => {
                setOtp(event.target.value);
                setStatus(null);
              }}
              required
              value={otp}
            />
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Verifying..." : "Verify and sign in"}
            </button>
            <div className="admin-auth-secondary-actions">
              <button disabled={isSubmitting} onClick={requestOtp} type="button">
                Resend code
              </button>
              <button disabled={isSubmitting} onClick={changeEmail} type="button">
                Change email
              </button>
            </div>
          </form>
        )}

        {status && (
          <p
            className={`admin-auth-status is-${status.type}`}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        )}
        <Link className="admin-auth-back-link" to="/">Back to Nico Farms</Link>
      </section>
    </main>
  );
}

export default AdminLogin;
