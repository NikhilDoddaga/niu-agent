const scenarios = {
  entrepreneurship: {
    question:
      "My name is Nikhil, and I am a Computer Science student interested in building products and working on innovative projects. Could you help me find resources that NIU offers for entrepreneurs?",
    mission: `
      <p>Hey Nikhil! It's awesome that you're interested in building products and working on innovative projects.</p>
      <p>While I'm not entirely sure about all the details, I believe Northern Illinois University might offer resources and programs that could help you out. Look into whether there are innovation labs, startup incubators, or networking events that can connect you with like-minded individuals.</p>
      <p>I recommend reaching out to the department of Computer Science or the entrepreneurship center for more information. They'll have the latest resources and can guide you in the right direction.</p>
    `,
    college: `
      <p>Hi Nikhil! Combining Computer Science with entrepreneurship is a strong path at NIU. Here are the most relevant resources to explore first.</p>
      <h4>71 North - NIU Innovation Partnership Studio</h4>
      <p>71 North helps students bring ideas to life through project space, tools, mentorship, and support for early-stage innovation work.</p>
      <h4>Key programs for student entrepreneurs</h4>
      <ul>
        <li><strong>Innovation Club:</strong> A student-led group for creative problem solvers across campus, with mentorship, speaker events, pitch opportunities, and visits to innovation centers.</li>
        <li><strong>E-Team Program:</strong> A VentureWell-supported pathway that can provide entrepreneurship training, mentorship, national exposure, and non-dilutive funding opportunities.</li>
        <li><strong>Startup Standup:</strong> A pitch and product-development event blending startup thinking, storytelling, and rapid ideation.</li>
        <li><strong>Student Projects:</strong> A way to join or build practical projects including apps, podcasts, VR galleries, AI research, and other product-focused work.</li>
      </ul>
      <h4>Recommended next steps</h4>
      <ul>
        <li>Visit 71 North and ask about current student project opportunities.</li>
        <li>Join the Innovation Club to meet other builders.</li>
        <li>Ask whether your product idea could qualify for E-Team support.</li>
      </ul>
    `,
    references: [
      "projects_all.docx",
      "programs_clubs_innovationClub.docx",
      "programs_e-Team.docx",
      "programs_StartupStandup.docx",
    ],
  },
  scholarships: {
    question: "As an incoming student, what scholarship opportunities does NIU offer me?",
    mission: `
      <p>Great question! NIU's MyScholarships is where you can see what scholarships are available to students at the link below.</p>
      <p><strong>go.niu.edu/myscholarships</strong></p>
      <p>Good luck exploring all the opportunities!</p>
    `,
    college: `
      <p>Great question, Nikhil. NIU offers several scholarship opportunities for incoming students, including automatic merit consideration and additional awards through MyScholarships.</p>
      <h4>Merit scholarships</h4>
      <p>When you apply for admission to NIU, you are automatically considered for merit scholarships. No separate scholarship application is needed for those awards.</p>
      <h4>Priority deadlines</h4>
      <ul>
        <li><strong>October 1:</strong> Priority deadline for spring admission consideration.</li>
        <li><strong>December 1:</strong> Priority deadline for summer or fall freshman admission consideration.</li>
      </ul>
      <h4>Additional opportunities</h4>
      <ul>
        <li><strong>NIU Partnership Awards / AIM HIGH:</strong> Students who file FAFSA by the listed priority date and meet criteria may be considered.</li>
        <li><strong>Huskie Legacy Award:</strong> Incoming freshmen may qualify if a parent graduated from NIU.</li>
        <li><strong>MyScholarships:</strong> Use NIU's scholarship system to search and apply for additional institutional awards.</li>
        <li><strong>Outside scholarships:</strong> NIU also encourages students to seek scholarships through high schools, employers, civic groups, and professional organizations.</li>
      </ul>
      <h4>Recommended next steps</h4>
      <ul>
        <li>Apply for admission by the priority deadline.</li>
        <li>File FAFSA early to maximize aid eligibility.</li>
        <li>Explore MyScholarships and contact scholarships@niu.edu with award-specific questions.</li>
      </ul>
    `,
    references: [
      "financial-aid_scholarships_merit_freshman.docx",
      "financial-aid_scholarships_index.docx",
      "financial-aid_index_2.docx",
    ],
  },
  careers: {
    question: "What career resources can I find at NIU?",
    mission: `
      <p>You can get career resources from the NIU Career Services! Here, I've linked their page below for more information.</p>
      <p><strong>niu.edu/career-services/index.shtml</strong></p>
      <p>Hope you find it helpful!</p>
    `,
    college: `
      <p>NIU offers a wide range of career resources to help students explore opportunities, build skills, and launch their careers.</p>
      <h4>Huskies Get Hired</h4>
      <p>As an NIU student, you have access to Huskies Get Hired, a free online tool for jobs, internships, interviews, resumes, and labor market information.</p>
      <ul>
        <li>Search and apply for internships and jobs.</li>
        <li>Schedule on-campus interviews.</li>
        <li>Upload your resume for employer review.</li>
        <li>Research labor market trends.</li>
      </ul>
      <h4>Career Fair Plus</h4>
      <p>Career Fair Plus helps students prepare for fairs and employer events, review attending employers, research open roles, and use event maps and schedules.</p>
      <h4>Internships and employer partners</h4>
      <p>NIU encourages students to explore internships early, including during the first year. Career Services also works with employer partners to connect Huskies with interviews, events, and real-world experience.</p>
      <h4>Need help?</h4>
      <p>Contact NIU Career Services at 815-753-1642 or careerservices@niu.edu.</p>
    `,
    references: ["career-services_jobs-and-internships_index.docx"],
  },
  honorsHousing: {
    question:
      "I am an Honors student looking for housing options. Can you connect me with any resources?",
    mission: `
      <p>For housing options, you can explore off-campus housing through our dedicated portal.</p>
      <p><strong>offcampushousing.niu.edu</strong></p>
      <p>If you're experiencing housing insecurity or need additional support, we have resources available to assist you.</p>
      <p><strong>niu.edu/student-assistance/support/housing.shtml</strong></p>
      <p>Good luck finding the perfect place!</p>
    `,
    college: `
      <p>Absolutely. As an Honors student at NIU, you have several housing options and resources available, with one especially strong fit.</p>
      <h4>Recommended option: Honors House Living-Learning Community</h4>
      <p>The Honors House Living-Learning Community gives University Honors students the opportunity to live, learn, and connect with like-minded peers. It is located in NIU's Patterson Complex and uses 12-person cluster-style living, with space for up to 200 students across east and west residential halls.</p>
      <h4>What's included</h4>
      <ul>
        <li>Monthly faculty dinner events.</li>
        <li>Academic and professional development workshops.</li>
        <li>Cultural and community-building experiences.</li>
        <li>Weekly Honors House Community Nights.</li>
        <li>An annual Honors welcome retreat for first-year students.</li>
        <li>Mentorship between first-year and returning Honors students.</li>
        <li>Career-building opportunities and dedicated Honors faculty and staff.</li>
      </ul>
      <h4>Requirements and sign-up</h4>
      <p>Students must be admitted to the University Honors Program and remain in good standing. To sign up, log in to MyHousing and follow the room and meal plan selection instructions. If you meet the requirements and space is available, you should be able to select a room in Honors House.</p>
      <h4>Other on-campus housing options</h4>
      <p>NIU also offers five residence hall communities and the apartment-style Northern View Community. Other Living-Learning and Special Interest Communities include ACES House, Business Careers House, Esports Community, Fine Arts House, Health Professions House, TEACH House, Foreign Language Residence Program, LGBTQA Community, ROTC House, STEM Careers House, Sport/Recreation/Wellness Community, and Transfer House.</p>
      <h4>Key contacts</h4>
      <ul>
        <li><strong>Honors House contact:</strong> Ashlyn Straka, astraka1@niu.edu.</li>
        <li><strong>Housing and Residential Services:</strong> housing@niu.edu or 815-753-1525.</li>
        <li><strong>Housing office:</strong> Neptune East 101, Monday-Friday, 8 a.m.-4:30 p.m. CT.</li>
        <li><strong>Housing website:</strong> niu.edu/housing.</li>
      </ul>
      <p>Space in Living-Learning Communities can be limited and may require department approval. After you complete your housing contract, you can choose a room during online room sign-up as space permits, or ask about waitlist options if a community is full.</p>
    `,
    references: [
      "housing_halls_communities_honors_index.docx",
      "content_part3.docx",
      "housing_halls_communities_index.docx",
    ],
  },
  academicSupport: {
    question:
      "I am falling behind in my classes and believe that I need extra help and support to learn. How can I get my grades up?",
    mission: `
      <p>Here's some info that can help you out!</p>
      <p>As a Huskie, you have the support you need to succeed in your education. Check out the link below.</p>
      <p><strong>niu.edu/academic-support/index.shtml</strong></p>
      <p>You're also encouraged to meet with your professor during office hours. They're listed on your class syllabus.</p>
      <p>You've got this!</p>
    `,
    college: `
      <p>Don't worry. NIU has a wide range of academic support resources to help you get back on track. The best next step is to use multiple supports at the same time: tutoring, professor office hours, writing help, academic coaching, and advising.</p>
      <h4>Huskie Academic Success Center</h4>
      <p>The Huskie Academic Success Center offers academic services and resources that can help you improve your grades and build a stronger learning strategy.</p>
      <ul>
        <li>Tutoring sessions for select courses, including individual and small-group options.</li>
        <li>Supplemental Instruction, which provides interactive sessions outside class to reinforce and clarify course material.</li>
        <li>Writing assistance to help you become a stronger and more confident writer.</li>
        <li>Academic skills development, including test taking, time management, note-taking, and study strategies.</li>
        <li>Academic coaching and Academic Recovery Program support if you need a structured plan to get back on track.</li>
      </ul>
      <h4>Founders Learning Commons</h4>
      <p>Located in Founders Memorial Library, Founders Learning Commons can answer questions, connect you with tutoring, help with research and writing, provide technology resources, and offer spaces to collaborate with classmates.</p>
      <h4>Math Assistance Center</h4>
      <p>The Math Assistance Center helps students with most courses offered through the math department. It is located in Founders Learning Commons, is open Monday through Friday, and does not require an appointment. Bring your NIU OneCard and walk in.</p>
      <h4>Writing Center</h4>
      <p>The Writing Center can help with essays, organization, grammar, punctuation, and understanding class assignments. You can sign up online for writing support at a time that works for you.</p>
      <h4>Huskie Alerts and early intervention</h4>
      <p>Huskie Alerts allow faculty to notify student services staff when a student may be struggling with academic progress, engagement, or attendance. That process helps NIU connect students with support earlier.</p>
      <h4>Personal and emotional support</h4>
      <p>If stress, anxiety, or emotional concerns are affecting your classes, Counseling and Consultation Services can help. Your academic performance and mental wellness are connected, so it is okay to ask for both kinds of support.</p>
      <h4>Recommended next steps</h4>
      <ul>
        <li>Email or visit your professor during office hours this week.</li>
        <li>Book tutoring or Supplemental Instruction for the class where you feel most behind.</li>
        <li>Meet with your academic advisor to make a recovery plan.</li>
        <li>Use the Writing Center or Math Assistance Center if your hardest class involves writing or math.</li>
        <li>Contact the Huskie Academic Success Center through niu.edu/academics/tutoring.</li>
      </ul>
    `,
    references: [
      "academics_tutoring_index.docx",
      "student-life_resources_academic-support.docx",
      "citl_resources_guides_student-success.docx",
    ],
  },
  tuitionPayments: {
    question:
      "When do I pay my tuition, how do I pay it, and how can I check how much I should be paying?",
    mission: `
      <p>Great questions! To learn how to make a payment, check out the link below.</p>
      <p><strong>niu.edu/bursar/payments/make-a-payment.shtml</strong></p>
      <p>Let me know if you need any more help!</p>
    `,
    college: `
      <p>Great questions. Here's what you need to know about when tuition is due, how to pay, and how to check what you owe at NIU.</p>
      <h4>When do I pay my tuition?</h4>
      <p>Payments on your account are due on the 28th of the month specified on your account. Initial fall and spring semester statements are usually issued about two to three weeks after the start of the semester. After that, statements continue monthly, with new charges due at the end of the month on the 28th.</p>
      <ul>
        <li><strong>Fall 2025:</strong> September 28, November 28, and December 28.</li>
        <li><strong>Spring 2026:</strong> February 28 and March 28.</li>
        <li><strong>Summer 2026:</strong> June 28.</li>
      </ul>
      <p>If a due date falls on a weekend, holiday, or NIU closure, payment can be made on the next business day without a late payment fee penalty.</p>
      <h4>How do I pay?</h4>
      <ul>
        <li>Electronically through MyNIU.</li>
        <li>By mail.</li>
        <li>In person at the Bursar's Office in Swen Parson Hall, Room 235.</li>
        <li>Through one of the Bursar's Office drop boxes.</li>
        <li>Through Flywire for international student payments.</li>
      </ul>
      <p>If you pay less than the total amount due by the deadline, a $25 late payment fee may be assessed on unpaid amounts of $25 or more. Past due payments may also lead to a hold on your records that prevents class registration.</p>
      <h4>How do I check how much I owe?</h4>
      <p>Your monthly billing statements are available online through MyNIU. Each statement shows charges, payments or credits since the last statement, the installment amount due, and your current outstanding balance.</p>
      <h4>Need to split payments? Huskie Installment Plan</h4>
      <p>The Huskie Installment Plan is designed to help students spread NIU semester expenses over four equal monthly payments instead of paying one lump sum at the beginning of the term.</p>
      <ul>
        <li>Enrollment is per semester, so you must apply each semester you want to participate.</li>
        <li>There is a non-refundable $50 participation fee per semester.</li>
        <li>The plan is not available in summer.</li>
        <li>For fall, the first installment is due August 28, with remaining payments in September, October, and November.</li>
        <li>For spring, the first installment is due January 28, with remaining payments in February, March, and April.</li>
      </ul>
      <h4>Bursar's Office contact</h4>
      <ul>
        <li><strong>Email:</strong> bursar@niu.edu.</li>
        <li><strong>Location:</strong> Swen Parson Hall, Room 235.</li>
        <li><strong>Billing and due dates:</strong> niu.edu/bursar/payments/due-dates.</li>
        <li><strong>Huskie Installment Plan:</strong> niu.edu/bursar/payments/HIP.</li>
      </ul>
    `,
    references: [
      "bursar_payments_due-dates.docx",
      "bursar_payments_make-a-payment.docx",
      "bursar_payments_HIP.docx",
    ],
  },
};

const questionEl = document.querySelector("#scenario-question");
const missionEl = document.querySelector("#mission-response");
const collegeEl = document.querySelector("#college-response");
const referencesEl = document.querySelector("#reference-list");
const tabs = document.querySelectorAll(".scenario-tab");

function renderScenario(key) {
  const scenario = scenarios[key];

  questionEl.textContent = scenario.question;
  missionEl.innerHTML = scenario.mission;
  collegeEl.innerHTML = scenario.college;
  referencesEl.innerHTML = scenario.references
    .map((reference, index) => `<span class="reference-chip">${index + 1}. ${reference}</span>`)
    .join("");

  tabs.forEach((tab) => {
    const isActive = tab.dataset.scenario === key;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderScenario(tab.dataset.scenario));
});

renderScenario("entrepreneurship");
