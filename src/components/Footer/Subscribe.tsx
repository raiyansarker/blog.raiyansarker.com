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
          className="ease-linear font-semibold disabled:cursor-not-allowed disabled:bg-dark-primary text-white rounded text-sm bg-[#292929] w-4/12 lg:w-3/12 h-full focus:outline-none hover:bg-dark-primary hover:text-white focus:bg-dark-primary focus:text-white transition"
        >
          Subscribe
        </button>
      </form>
    </>
  );
};

export default SubscribeForm;
