import { usePostOurServiceMutation } from "@/app/features/others/othersApi";
import { SmallSpinner } from "@/components/Spinner";
import { Private } from "@/utils/ProtectRoute";
import { errorToast, successToast } from "@/utils/neededFun";
import axios from "axios";


function CreateService() {
    const [ourServicePost, { isLoading }] = usePostOurServiceMutation();
    const handleSubmite = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        ourServicePost({ name })
            .then(res => {
                console.log(res);
                if (res.data?.success) {
                    successToast("New Service add successful!")
                    e.target.reset();
                } else {
                    errorToast("Something went wrong!")
                }
            });
    }

    return (
        <section className="max-w-[1900px] min-h-screen mx-auto p-5 ">
            <section className="flex justify-center ">

                <form onSubmit={handleSubmite} className="max-w-sm border-2 bg-slate-50 drop-shadow-xl p-5 rounded-xl">
                    <div className="space-y-12 ">
                        <div className="border-gray-900/10">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                                Add service
                            </h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3 ">


                                    <label
                                        htmlFor="first-name"
                                        className="block font-medium leading-6 text-gray-900 text-lg"
                                    >
                                        Service name
                                    </label>
                                    <div className="mt-2">
                                        <input

                                            type="text"
                                            name="name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 w-80"
                                        />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-start">


                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-1.5 w-20 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isLoading ? <SmallSpinner /> : <span className="">seve</span>}
                        </button>
                    </div>
                </form>
            </section>

        </section>
    );
}

export default Private(CreateService);