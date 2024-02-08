import { TestimonialData } from '../interface/testimonialData';

function SingleTestimonial({ description, image, name, jobTitle }: TestimonialData) {
  return (
    <div className="flex w-screen flex-col items-center py-4 text-center md:px-28 lg:my-4 lg:px-0">
      <p className="px-12 italic lg:h-24 lg:w-full">{`"${description}"`}</p>
      <img src={image} className="m-4 h-20 w-20 rounded-full" alt="profile" />
      <strong>{name}</strong>
      <h5>{jobTitle}</h5>
    </div>
  );
}

export default SingleTestimonial;
