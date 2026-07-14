"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imagePath } from "../lib/image-path";

type GalleryPhoto = {
  src: string;
  alt: string;
  aspect: string;
  objectPosition?: string;
};

type GalleryChapter = {
  eyebrow: string;
  title: string;
  body: string;
  aside?: string;
  align: "left" | "right";
  photos: GalleryPhoto[];
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const chapters: GalleryChapter[] = [
  {
    eyebrow: "Chapter 01",
    title: "Beginning with a blank-slate concept",
    body:
      "Students enter the studio with early questions, rough ideas, and no finished answers. Workshops and lectures establish the first design language: framing problems, sketching possibilities, and turning abstract intent into something buildable.",
    aside:
      "The documentary tone here is deliberate: less polished brochure, more field note from a live engineering studio.",
    align: "left",
    photos: [
      {
        src: imagePath("/images/Course/20250707014_Pilot_Workshop-scaled.jpg"),
        alt: "Pilot workshop on building your own prototype arm",
        aspect: "aspect-[5/4]",
      },
      {
        src: imagePath("/images/Course/edwin_workshop.jpg"),
        alt: "Instructor is guiding students during a workshop session",
        aspect: "aspect-[4/5]",
      },
      {
        src: imagePath("/images/Course/edwin_lecture.jpg"),
        alt: "Instructor is delivering a lecture on sustainable technologies",
        aspect: "aspect-[4/3]",
      },
    ],
  },
  {
    eyebrow: "Chapter 02",
    title: "Learning by making, testing, and iterating",
    body:
      "As the course progresses, ideas become prototypes. Students work in teams, receive feedback in motion, and refine both concept and execution through repeated cycles of making, critique, and adjustment.",
    aside:
      "What matters is not a perfectly staged outcome, but the evidence of process: hands-on trial, revision, and visible progress.",
    align: "right",
    photos: [
      {
        src: imagePath("/images/Course/kyle_lecture.jpg"),
        alt: "Instructor is delivering a lecture on rapid prototyping",
        aspect: "aspect-[16/10]",
      },
      {
        src: imagePath("/images/Course/kyle_workshop1.jpg"),
        alt: "Student team is posing with their prototype",
        aspect: "aspect-[4/5]",
      },
      {
        src: imagePath("/images/Course/kyle_workshop2.jpg"),
        alt: "Student team is posing with their prototype",
        aspect: "aspect-[4/5]",
      },
      {
        src: imagePath("/images/Course/kyle_workshop3.jpg"),
        alt: "Student team is posing with their prototype",
        aspect: "aspect-[5/4]",
      },
    ],
  },
  {
    eyebrow: "Chapter 03",
    title: "From studio ideas to tangible hardware",
    body:
      "By the later stages, student teams are no longer working with vague concepts. They are presenting prototypes, documenting improvements, and demonstrating engineering decisions through real, tangible artifacts and public-facing communication.",
    aside:
      "This final rhythm is about translation: thought into object, object into explanation, explanation into confidence.",
    align: "left",
    photos: [
      {
        src: imagePath("/images/Course/ryan_lecture.jpg"),
        alt: "Instructor is delivering a lecture on aerial robotics",
        aspect: "aspect-[16/10]",
      },
      {
        src: imagePath("/images/Course/studentgroup.jpg"),
        alt: "Student team is posing with their prototype",
        aspect: "aspect-[4/5]",
      },
      {
        src: imagePath("/images/Course/Timmy_groupphoto.jpg"),
        alt: "Students and instructor",
        aspect: "aspect-[5/4]",
      },
      {
        src: imagePath("/images/Course/timmy_lecture.jpg"),
        alt: "Instructor is delivering a lecture on design thinking",
        aspect: "aspect-[4/3]",
      },
      {
        src: imagePath("/images/Course/with_TO1.jpg"),
        alt: "Instructor is engaging in a lab showcase",
        aspect: "aspect-[4/5]",
      },
      {
        src: imagePath("/images/Course/with_TO2.jpg"),
        alt: "Instructor is engaging in a lab showcase",
        aspect: "aspect-[4/5]",
      },
    ],
  },
];

function PhotoCard({ photo, priority = false }: { photo: GalleryPhoto; priority?: boolean }) {
  return (
    <figure className="group space-y-3">
      <div className={`relative overflow-hidden rounded-[1.6rem] bg-slate-200 ${photo.aspect}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={`object-cover transition duration-500 ease-out group-hover:scale-[1.02] ${photo.objectPosition ?? "object-center"}`}
        />
      </div>
      <figcaption className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
        {photo.alt}
      </figcaption>
    </figure>
  );
}

export default function CourseEditorialGallery({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "mt-10" : "mt-12"}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-[2.2rem] border border-slate-200/80 bg-[#f7f5f1] px-6 py-8 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.18)] sm:px-8 sm:py-10 lg:px-10"
      >
        <div className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Visual Narrative
          </p>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[3.2rem] lg:leading-[1.04]">
            A documentary editorial of students moving from blank-slate concepts to real, tangible hardware.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            This version treats the gallery less like a photo wall and more like a yearbook narrative. Raw, live, first-person studio moments are paired with restrained editorial text to show how students think, build, test, and present their engineering work.
          </p>
        </div>

        <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
          {chapters.map((chapter, chapterIndex) => {
            const textFirst = chapter.align === "left";

            return (
              <motion.article
                key={chapter.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeIn}
                transition={{ duration: 0.65, delay: chapterIndex * 0.05 }}
                className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
              >
                <div className={`${textFirst ? "lg:order-1" : "lg:order-2"} flex items-start`}>
                  <div className="max-w-xl space-y-5 lg:sticky lg:top-28">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                      {chapter.eyebrow}
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="text-base leading-8 text-slate-700">
                      {chapter.body}
                    </p>
                    {chapter.aside ? (
                      <div className="border-l border-slate-300 pl-4 text-sm leading-7 text-slate-500">
                        {chapter.aside}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className={`${textFirst ? "lg:order-2" : "lg:order-1"} grid gap-4 sm:grid-cols-2 sm:gap-5`}>
                  {chapter.photos.map((photo, photoIndex) => (
                    <div
                      key={photo.src}
                      className={
                        chapter.photos.length % 2 === 1 && photoIndex === 0
                          ? "sm:col-span-2"
                          : ""
                      }
                    >
                      <PhotoCard photo={photo} priority={chapterIndex === 0 && photoIndex === 0} />
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}