import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type formValue = {
  email: string;
};

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<formValue>();

  const subscribe: SubmitHandler<formValue> = async ({ email }) => {
    const emailRegex = new RegExp(
      '/(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/'
    );

    if (emailRegex.test(email)) {
      return toast.error('Email is not valid');
    }

    const data = {
      email,
      tags: [
        'coming-soon-page',
        'maintenance-page',
        'subscription-before-launch',
      ],
    };

    const saveData = axios.post(
      `${process.env.NEXT_PUBLIC_API}/subscribe`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    toast.promise(saveData, {
      loading: 'Saving',
      success: () => {
        reset();
        return 'Check your email for verification';
      },
      error: () => {
        reset();
        return 'Subscription already exists';
      },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(subscribe)}
        className="bg-gray-200 h-12 mx-auto rounded-md w-full md:w-7/12 lg:w-6/12 xl:w-5/12 flex flex-row items-center space-x-1 p-1.5"
      >
        <input
          type="email"
          className="w-8/12 lg:w-9/12 h-full px-1 pl-3 bg-transparent outline-none placeholder:text-xs md:placeholder:text-sm placeholder:font-medium"
          placeholder="abc@xyz.com"
          {...register('email', { required: 'Email field is empty' })}
        />
        <button
          disabled={isSubmitting}
          className="ease-linear flex flex-row items-center justify-center font-semibold disabled:cursor-not-allowed text-white rounded text-sm bg-[#292929] w-4/12 lg:w-3/12 h-full focus:outline-none hover:bg-indigo-500 hover:text-white focus:bg-indigo-500 focus:text-white transition"
        >
          {isSubmitting && (
            <svg
              className="animate-spin inline-block aspect-square w-4 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx={12}
                cy={12}
                r={10}
                stroke="currentColor"
                strokeWidth={4}
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          Subscribe
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;
