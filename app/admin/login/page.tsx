import { sendMagicLink } from "../actions";
import { siteConfig } from "@/site.config";

export default function AdminLoginPage() {
  async function action(formData: FormData) {
    "use server";
    await sendMagicLink(formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: siteConfig.primaryColor }}
        >
          {siteConfig.businessName}
        </h1>
        <p className="text-gray-600 mb-6">
          Admin-Login per Magic Link
        </p>
        <form action={action} className="flex flex-col gap-4">
          <label htmlFor="email" className="font-medium text-sm">
            E-Mail-Adresse
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="admin@ihrebusiness.de"
            className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-offset-1"
          />
          <button
            type="submit"
            className="rounded-lg px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Magic Link senden
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6">
          Sie erhalten einen Link per E-Mail, über den Sie sich ohne
          Passwort anmelden können.
        </p>
      </div>
    </div>
  );
}
