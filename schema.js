import { buildSchema } from "graphql";

const schema = buildSchema(`

  type PersonalDetails {
      contactNumber: String
      contactEmail: String
      altEmail: String
      linkedinLink: String
      githubLink: String
      portfolioLink: String
      moreContactDetails: [Detail]
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

    type UpdateResponse {
      message: String
      error: String
    }
    
    type Query {
      getPersonalDetails: PersonalDetails
    }
    
    type Mutation {
      updateEntireResume(input: ResumeInput!): UpdateResponse
    }
    
    input ResumeInput {
      contactNumber: String
      contactEmail: String
      altEmail: String
      linkedinLink: String
      githubLink: String
      portfolioLink: String
      moreContactDetails: [DetailInput]
      education: [EducationInput]
      experience: [ExperienceInput]
      skills: [SkillInput]
      projects: [ProjectInput]
    }
    
    input DetailInput {
      text: String
      href: String
      preText: String
      target: String
    }
    
    input EducationInput {
      university: String
      studied: String
      gpa: String
      graduationDate: String
      location: String
    }
    
    input ExperienceInput {
      companyName: String
      location: String
      role: String
      date: String
      points: [String]
      otherRoles: [OtherRoleInput]
    }
    
    input OtherRoleInput {
      location: String
      role: String
      date: String
      points: [String]
    }
    
    input SkillInput {
      title: String
      Skills: [String]
    }
    
    input ProjectInput {
      name: String
      Stack: String
      date: String
      points: [String]
      website: WebsiteInput
      github: [GithubInput]
    }
    
    input WebsiteInput {
      url: String
      text: String
    }
    
    input GithubInput {
      text: String
      url: String
    }

  `);

export default schema;
