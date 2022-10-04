import SkeletonLayout from '@layouts/skeleton';

enum Subjects {
  Project = 'project',
  Query = 'query',
  Feedback = 'feedback',
  Other = 'other',
}

const Contact = () => {
  return (
    <>
      <SkeletonLayout>
        <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto h-center grid place-items-center">
          <div className="space-y-5 w-full my-8 mb-20">
            <div className="text-4xl font-semibold text-secondary leading-relaxed">
              <h2>Love to hear from you,</h2>
              <h2>Get in touch 👋</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              <label className="flex text-xs gap-y-2 text-dark-primary flex-col justify-start">
                Your Name
                <input
                  type="text"
                  className="form-input rounded text-xs bg-zinc-100 !ring-secondary border-none outline-none px-3 py-2.5"
                  placeholder="Name?"
                />
              </label>
              <label className="flex text-xs gap-y-2 text-dark-primary flex-col justify-start">
                Your Email
                <input
                  type="text"
                  className="form-input rounded text-xs !ring-secondary bg-zinc-100 border-none outline-none px-3 py-2.5"
                  placeholder="Email?"
                />
              </label>
              <label className="flex text-xs gap-y-2 text-dark-primary flex-col justify-start">
                What do you want to walk about
                <select
                  className="form-select rounded text-xs !ring-secondary bg-zinc-100 border-none outline-none px-3 py-2.5"
                  name="subject"
                >
                  {(Object.keys(Subjects) as (keyof typeof Subjects)[]).map(
                    (subject, index) => (
                      <option key={index} value={subject.toLowerCase()}>
                        {subject}
                      </option>
                    )
                  )}
                </select>
              </label>
              <label className="flex text-xs gap-y-2 text-dark-primary flex-col justify-start">
                Choose a profile picture:
                <input
                  type="file"
                  name="avatar"
                  className="form-input rounded text-xs !ring-secondary bg-zinc-100 border-none outline-none px-3 py-2.5"
                  accept="image/png, image/jpeg"
                />
              </label>
              <label className="col-span-full flex text-xs gap-y-2 text-dark-primary flex-col justify-start">
                Message
                <textarea
                  rows={6}
                  placeholder="Ask me anything 😀"
                  className="resize-none form-textarea col-span-full rounded text-xs !ring-secondary bg-zinc-100 border-none outline-none px-3 py-2.5"
                />
              </label>
              <button
                className="col-span-1 font-semibold disabled:cursor-not-allowed text-white rounded text-sm bg-[#292929] h-full focus:outline-none hover:bg-dark-primary hover:text-white focus:bg-dark-primary focus:text-white transition py-2.5"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </SkeletonLayout>
    </>
  );
};

export default Contact;
