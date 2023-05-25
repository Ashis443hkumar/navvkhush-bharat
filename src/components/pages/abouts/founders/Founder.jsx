import React from 'react';
import Heading from '../../../common/heading/Heading';
import Banner from '../../home/banner/Banner';
import AboutHeroBack from '../../home/hero/AboutHeroback';
import Impact from '../../home/impact/Impact';
import WhoWeAre from '../whoWeAre';
import FounderMessage from './founderMessage/FounderMessage';

export default function Founder() {
  return (
    <>
      <AboutHeroBack
        AboutTitle="Abouts Section"
        cover={
          'https://media.licdn.com/dms/image/D4D22AQGjzFI8AmM08Q/feedshare-shrink_2048_1536/0/1685000870912?e=1687996800&v=beta&t=BLYbYuU7lkPOjXuGbJjYdnP1ETLS5WzwO8V3-fvHZVc'
        }
      />


      <section class="founder_about_sectin py-4">
        <div className="container">
          <Heading title="About us" />
          <div className="row">
            <div className="col-12">
              <p>
                At the Crime Control & Social Development Organisation (CCSDO),
                we believe that every woman has the right to live a life of
                dignity and self-respect. Our registered NGO envisions working
                towards bringing significant changes in the lives of women
                across society by providing economic and social support,
                empowering them with financial independence...
              </p>
              <p>
                CCSDO is committed to contributing to society as equal partners
                in the development of families and communities, with a focus on
                reducing violence, harassment, and discrimination against women.
                We believe that by empowering women, we can create a brighter,
                more equal future for all.
              </p>

              <p>
                Our team is made up of dedicated professionals who are
                passionate about making a difference. From providing education
                and training to children and women in underserved communities to
                giving stitching classes to women inmates in Tihar Jail, our
                programs aim to equip individuals with the knowledge and tools
                they need to succeed in the modern world.
              </p>
              <p>
                We are proud of our achievements and the impact we have made in
                the lives of women and children. Our achievements till date
                include educating 1779 children, providing counselling to over
                3000 women, registering over 1250 women with us, and empowering
                75 women who are now financially independent. Additionally, we
                were selected for the Delhi Government{' '}
              </p>

              <p>
                Project for Digital Literacy Awareness Program in Delhi
                Government Schools, North East Delhi, and we have received
                orders from Munjal Showa and AG Industries for uniform and
                T-shirt stitching, providing employment opportunities to women.
              </p>

              <p>
                At CCSDO, we are committed to our mission of creating a more
                just and equal society. Join us on this journey towards a
                brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* nisha yadav   */}

      {/* <section class="achiment_still_date">
        <div className="container">
          <div className="heading_stil">
             <h1 class="text-center py-5 ">Our Achievements till Date (since 2020)</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div class="rtyty  wergewr4">
                <h3>Number of Children Educated 1779</h3>
              </div>
              <div className="rtyty weretret">
                <h3>Women Counseling 3000 +</h3>
              </div>
              <div className="rtyty eertretre">
                <h3>Women Registered with us 1250+</h3>
              </div>
              <div class="rtyty ertertrfte">
                <h3>Women Employed & financially independent 75+</h3>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://i.pinimg.com/736x/2c/4f/f7/2c4ff7e2fdeb5511a21e00489b38610f.jpg" class="w-100" alt=""/>
            </div>
          </div>
        </div>
      </section> */}

      <FounderMessage />
      {/* <Banner/> */}
      <Impact />

      <section class="advisor">
        <div className="container-fluid">
          <Heading title="Advisory Board Members" />
          <div className="row advisor_row">
            <div className="col-md-3">
              <img
                src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/advisor-1.jpg"
                class="card-img-top w-100"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h3>Mr. Prahlad Godara</h3>
              <p>
                Mr. Godara is B. Com & Law Graduate from University of
                Rajasthan, Jaipur.{' '}
              </p>
              <p>
                He has worked over 3 decades with World 's number 1 two-wheeler
                company M/S Hero MotoCorp Ltd (formerly known as Hero Honda
                Motors Ltd) & retired as a Senior General Manager - Human
                Resource in Feb, 2020
              </p>

              <p>
                Post retirement he is working with Sh. Dushyant Chautala,
                Hon'ble Dy C M, Haryana Government as an Advisor to Chairman,
                Haryana Building & Construction Worker Welfare Board, Labour
                Dept He is very passionate to understand social engineering,
                social set{' '}
              </p>
              <p>
                up of our country & wish to work very closely with human beings.
              </p>
            </div>
          </div>
          <div className="row mt-3 advisor_row">
            <div className="col-md-9">
              <h3>Mr. Vijay Sharma</h3>
              <h6>
                Mr. Vijay Sharma serves as a Director of the Jindal Stainless.{' '}
              </h6>
              <p>
                With over 35 years of experience, Mr. Sharma has steered diverse
                roles in the areas of Corporate affairs, Sales, Distribution,
                Corporate Branding, Marketing & Business Development, Strategy
                Formulation, Supply Chain Management, Market research & Product
                development, Customer outreach & satisfaction in Stainless Steel
                & Automotive Industries. He also has been overseeing
                profitability of the Service center chains of the Jindal
                Stainless Group in India and in Spain.
              </p>
              <p>
                An able orator and an avid social media proponent, Mr. Sharma is
                a regular presenter in premium institutes, national &
                international webinars & conferences. His articles/ views on
                business situations are regularly published in various Industry
                magazines. He has been awarded multiple accolades for his
                contribution in Stainless Steel & Automotive Industry.
              </p>
              <p>
                He is also on the Board of companies like Indian Iron & Steel
                Skill Sector council, Shalimar paints, JSL Lifestyle. He is the
                Chairman – Haryana state Development Council of ASSOCHAM, Co
                Chair- Haryana State Chapter PHDCCI. He is member & actively
                participating in various initiatives of Apex Associations like
                FICCI, CII, ISA & ISSDA.
              </p>
            </div>
            <div className="col-md-3">
              <img
                src="https://www.navvkhushbharat.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-13-at-11.50.52-AM.jpeg"
                class="card-img-top w-100"
                alt=""
              />
            </div>
          </div>
          <div className="row mt-3 advisor_row">
            <div className="col-md-3">
              <img
                src="https://www.navvkhushbharat.com/wp-content/uploads/2023/01/Sandeep_2022_Pic-1024x889.jpg"
                class="card-img-top w-100"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h3>Sandeep Bhargava</h3>
              <p>
                Sandeep Bhargava - BE, MBA, With more than 40 years of National
                and International Experience in Corporate Affairs and Public
                Policy, Government Affairs, Enterprise Sales and Program
                Management. Major Companies worked in India and Europe: 
                Vodafone Idea Limited  Microsoft Corp  Nokia India  Nokia
                Siemens Networks  Hughes India Currently Senior Advisor at
                Telecom and Digital Health Companies and Investor & Mentor at
                Startups. Social Sector: Member Advisory Board of Sarthak since
                its inception and Vice President-National Abylimpics Association
                of India Advisory Board Member, Aambra Foundation Member
                Advisory Board at Samaagra Foundation.
              </p>
            </div>
          </div>
          <div className="row mt-3 advisor_row">
            <div className="col-md-9">
              <h3>PARUL KUMAR</h3>
              <p>
                “Happy people are truly grateful people. They focus on the best
                things that happen to them every single day. They see a miracle
                in the smallest aspects of life.”
              </p>

              <p>
                PARUL KUMAR, post graduate from LADY IRWIN COLLEGE, University
                of DELHI and holding a Management degree, has a multi-faceted
                personality having interest in Theatre and a passion for
                performing arts. She was actively involved in SPIC MACAY, where
                she was the National Treasurer. She organized more than 200
                classical concerts per
              </p>

              <p>
                year. She is a Kathak Dancer too. She has been part of many
                panel discussions on Youth Forum during college days on social
                issues. For past fifteen years she has worked intensively as a
                Social Entrepreneur, building inclusive and participatory
                society. It’s been a challenging yet satisfactory life
              </p>

              <p>
                She is the Co-founder of PRABHAAV FOUNDATION. This foundation is
                contributing in field of conscious living with focus on
                Environment, Education, Health and Culture through various CSR
                projects.
              </p>

              <p>
                In year 2021, She became the CEO of AK INSTITUTE OF
                OPHTHALMOLOGY, a state of an art Eye Hospital headed by Padma
                Shree Dr Atul Kumar.
              </p>
            </div>
            <div className="col-md-3">
              <img
                src="https://www.navvkhushbharat.com/wp-content/uploads/2023/01/Image-2022-09-19-at-15.26.56.jpg"
                class="card-img-top w-100"
                alt=""
              />
            </div>
          </div>
          <div className="row mt-3 advisor_row">
            <div className="col-md-3">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQENIy-UORHqAw/feedshare-shrink_800/0/1685000870580?e=1687996800&v=beta&t=VtimxBu8lnsNHUvJdSEwA2bxMf0FhtWld_9fiYUF7H4"
                class="card-img-top w-100"
                alt=""
              />
            </div>
            <div className="col-md-9">
              <h3>Ravi Sinha</h3>
              <p>
                A result-driven HR-professional with over 30 years of Industry
                experience, having expertise in creating and implementing
                programs to enhance global business operations
              </p>
              <p>
                With over 30 years of industry work experience as General
                Manager, HR, at Hero MotoCorp India, have played an extremely
                pivotal in guiding the organization to reach and maintain
                position of leadership
              </p>
              <p>
                Analyzed existing talent recruiting, sourcing and selection
                processes and developed , over the years, more efficient
                processes to improve quality of candidate selection and produce
                retention strategies that improve overall business efficiencies
                and acquisition costs
              </p>
              <p>
                Strategized global organizational policies and implemented
                change-management in line with organizational needs and overall
                business climate, including company-wide restructuring and
                reduction initiatives; implemented outplacement plans and
                focused on increasing employee morale after downsizing
              </p>
              <p>
                Planned, developed, implemented and institutionalized
                HR/Personnel Development policies, OD interventions, and
                industry best-practices
              </p>
              <p>
                Devised manpower training policies, implemented educational
                training programs, and educated management and business line
                leaders about legal compliance and employee best practices
              </p>
              <p>
                Provided consultancy services in the field of labor training and
                development, competency mapping, and L&D initiatives to the
                leading industry clients like Suzuki Motor Gujarat, Hero
                MotoCorp, etc
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
