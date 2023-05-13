import Link from "next/link";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit }) => {

  return (
    <section className="full max-w-full flex-start flex-col">
      <h1 className="head_text text-left"> <span className="blue_gradient">{type} Your Desires </span>  </h1>
      <p className="desc text-left max-w-md">
        {type} and share powerful words that makes your life prosperous, be a motivation to others
        as you set you life on the path it will forever go with you own Words.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex
        flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-grey-700">
            What's on your mind?
          </span>
          <textarea
            value={post.declaration}
            onChange={(e) => setPost({
              ...post,
              declaration: e.target.value
            })}
            placeholder="Let's go"
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Tag {' '}
            <span font-normal>
              {'#benefit #day-to-day #blessedman'}
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({
              ...post,
              tag: e.target.value
            })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-grey-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-[blue] rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form