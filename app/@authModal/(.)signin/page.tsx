import SigninForm from "@/components/forms/SigninForm";
import AuthModal from "@/components/modals/AuthModal";

export default function page() {
  return (
    <AuthModal>
      <SigninForm />
    </AuthModal>
  );
}
