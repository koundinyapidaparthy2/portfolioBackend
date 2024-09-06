import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
      getPersonalDetails: PersonalDetails
    }
    
    type PersonalDetails {
      contactNumber: String
      contactEmail: String
      altEmail: String
      linkedinLink: String
      githubLink: String
      portfolioLink: String
      mypersonalDetails: [Detail]
      education: [Education]
      experience: [Experience]
      skills: [Skill]
      projects: [Project]
    }
    
    type Detail {
      text: String
      href: String
      preText: String
      target: String
    }
    
    type Education {
      university: String
      studied: String
      gpa: String
      graduationDate: String
      location: String
    }
    
    type Experience {
      companyName: String
      location: String
      role: String
      date: String
      points: [String]
      otherRoles: [OtherRole]
    }
    
    type OtherRole {
      location: String
      role: String
      date: String
      points: [String]
    }
    
    type Skill {
      title: String
      Skills: [String]
    }
    
    type Project {
      name: String
      Stack: String
      date: String
      points: [String]
      website: Website
      github: [Github]
    }
    
    type Website {
      url: String
      text: String
    }
    
    type Github {
      text: String
      url: String
    }
    
  `);

export default schema;
