import Banner from '../about/components/Banner'
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-white">
       <Banner
        title="Contact Us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 mb-8">We usually reply within 24 hours.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="example@mail.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
                    <option>Course Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnerships</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit" 
                  className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

            {/* Right Column: Information & Visuals */}
            <div className="bg-blue-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-bl-[100%] opacity-50 z-0"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Call Us</h3>
                      <p className="text-gray-600 mt-1">+880 1234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email Us</h3>
                      <p className="text-gray-600 mt-1">info@aymashub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Visit Us</h3>
                      <p className="text-gray-600 mt-1">123 Education Avenue, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Office Hours</h3>
                      <p className="text-gray-600 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. MAP SECTION --- */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-100">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9025148883434!2d90.3915785153637!3d23.750509684580077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74a2e0f2c55%3A0x6e16c2a2b6d1e0a!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(20%)' }} 
               allowFullScreen
               loading="lazy" 
               title="Our Location"
             ></iframe>

             {/* Floating Address Card */}
             <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                   <MapPin size={20} />
                 </div>
                 <h3 className="font-bold text-slate-900">Our Head Office</h3>
               </div>
               <p className="text-sm text-gray-600 mb-4">123 Education Avenue, Dhaka 1212, Bangladesh</p>
               <button className="flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                 Get Directions <ChevronRight size={16} />
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* --- 3. FINAL CTA SECTION --- */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your learning journey?</h2>
          <p className="text-gray-300 mb-8">Join thousands of successful students who have transformed their careers with Aymas Hub.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-300">
              Join Free Class
            </button>
            <button className="px-8 py-3.5 border border-gray-600 hover:border-white text-white font-semibold rounded-xl transition-colors duration-300">
              View All Courses
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact