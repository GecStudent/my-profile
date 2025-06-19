
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-coral">Me</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Passionate about Cloud Innovation and DevOps Excellence.</h3>
            <div className="text-slate-300 leading-relaxed space-y-6 text-lg">
              <p>
                I'm <span className="text-white font-semibold">Nikheel Kumbhani</span>, a
                <span className="text-coral font-semibold"> Computer Engineering student</span> at
                <span className="text-white font-semibold"> Government Engineering College, Bhavnagar</span> (CGPA:
                <span className="text-coral font-semibold"> 8.13</span>), with a strong focus on Cloud Computing, DevOps, and Full-Stack Development.
              </p>

              <p>
                I build scalable, cloud-native solutions using <span className="text-coral font-semibold">AWS</span>,
                <span className="text-coral font-semibold"> Kubernetes</span>, and
                <span className="text-coral font-semibold"> Terraform</span>, with expertise in CI/CD pipelines, infrastructure automation,
                and backend systems. I'm passionate about delivering secure, maintainable, and efficient applications that bridge development
                and operations.
              </p>

              <p>
                Based in <span className="text-white font-semibold">Surat, Gujarat</span>, I’m open to innovative cloud and DevOps projects.
                Feel free to reach me at <span className="text-coral font-semibold">+91 6355639005</span> or
                <span className="text-coral font-semibold"> nik@nikheelkumbhani.com</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
