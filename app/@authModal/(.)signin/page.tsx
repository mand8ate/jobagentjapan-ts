import CloseModal from "@/components/CloseModal";
import SigninForm from "@/components/forms/SigninForm";

export default function page() {
  return (
    <div className="fixed bg-black z-20 h-full w-full">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>

          <SigninForm />
        </div>
      </div>
    </div>
  );
}
