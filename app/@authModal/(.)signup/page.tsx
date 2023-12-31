import SignupForm from "@/components/forms/SignupForm";
import AuthModal from "@/components/modals/AuthModal";

export default function page() {
  return (
    <AuthModal>
      <SignupForm />
    </AuthModal>
  );
}
