export default function Experience({workexperiences}) {

    return (
        <section
        id="experience"
        className="min-h-screen flex flex-col justify-center "
        >
        {
            workexperiences.map((experience, index) => (
            <div key={index} className="mt-8">
                <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                <h4 className="text-xl font-bold text-white">{experience.position}</h4>
                <p className="text-l text-white ">{experience.date}</p>
                <p className="mt-2 text-white">{experience.description}</p>
            </div>
            ))
        }
        </section>
    );
    }