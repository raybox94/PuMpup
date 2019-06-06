# Project Management Plan

### Description

The purpose is to create web application using Php as backend which helps people to understand 10 knowledge areas and 5 process groups in project management and provide quiz for knowledge are and process group.

Below are the various knowledge area plans integrated with the project:

### Project scope management plan

This describe how project scope will be monitored and controlled. This contains WBS(work breakdown structure )how it will be maintained and approved.

#### Requirement Specification
| S.No 	|                         Requirement                        	| Priority 	| Type           	|
|------	|:----------------------------------------------------------:	|----------	|----------------	|
|   1  	| Web Application UI should be simple and easy to understand 	| High     	| Functional     	|
|   2  	| User should be able to register and login                  	| High     	| Functional     	|
|   3  	| Application should display a list of quizzes               	| Medium   	| Functional     	|
|   4  	| Application should be able to maintain user score          	| Medium   	| Functional     	|
|   5  	| User Should able to drag components easily                 	| High     	| Functional     	|
|   6  	| Application should maintain consistancy                    	| low      	| Non-Functional 	|
|   7  	| User should able to logout of application easily           	| Medium   	| Functional     	|

#### Scope Statement

The Scope statement details the project deliverables and describe the major objectives.

Scope statement contains:
- project charter
- Deliverable
- Assumptions
- Constraints
- Project exclusion
- Cost Estimation

##### Application scope description:

These are the features included in scope of the application:

- The user should be able to login and logout of the application.
- The application should provide smooth drag and drop to arrange 10 knowledge area and 5 process group in order and provide score according to that.
- The scores of the user should be maintained properly.

##### Project Charter:

[Project Charter](https://github.com/raybox94/PuMpup/blob/master/docs/PROJECT_CHARTER.md)

##### Deliverable:

The end product will be an application which provide information on 10 knowledge areas and 5 process group and allow user to take quizz on 10 knowledge areas and 5 process groups.

##### Assumptions:

- Project scope will not change once stakeholder sign the document.
- Project cost will remain same till the end.
- All the requirements are readyly available.
- Project team has knowledge on developing web application.

##### Constraints:

- Scope constraint: Application provides information and quiz on only 10 knowledge area and 5 process group in project management.
- Time constraint: According to the schedule the project should complete by first week of june and testing should be done by end of june.
- Cost Constraints: The development of the project should be done with in project budget limit.

##### Project exclusion:

Project exclusion are those things that are outside of project boundries.

##### Cost estimation:

| **WBS Items**                              | **Hrs.** | **Cost/Hrs.** | **Subtotals** | **WBS Level 2 totals** | **% of totals** | 
|----------------------------------------|------------|----------------|-----------|--------------------|-------------| 
|                                        |            |                |           |                    |             | 
| 1.Sketching                            |            |                |           | $7,910             | 14.13%      | 
|       1.1 Project Manager              | 25         | $70            | $1,750    |                    |             | 
|       1.2 Team Lead                    | 56         | $60            | $3,360    |                    |             | 
|       1.3 UI Designer and UI Developer | 56         | $50            | $2,800    |                    |             | 
| 2.Sample Data                          |            |                |           | $2,000             | 3.57%       | 
|       2.1 Developer                    | 40         | $50            | $2,000    |                    |             | 
| 3.Architecture                         |            |                |           | $12,100            | 21.61%      | 
|       3.1 Project Manager              | 100        | $70            | $7,000    |                    |             | 
|       3.2 MVP Tools                    | 1          | $100           | $100      |                    |             | 
|       3.3 MVP Developer                | 100        | $50            | $5,000    |                    |             | 
| 4.Development                          |            |                |           | $14,520            | 25.94%      | 
|       4.1 MS Office licenses           | 2          | $20            | $40       |                    |             | 
|       4.2 Project Manager              | 50         | $70            | $3,500    |                    |             | 
|       4.3 Team Lead                    | 100        | $60            | $6,000    |                    |             | 
|       4.4 Developer                    | 100        | $50            | $5,000    |                    |             | 
|       4.5 Project management tools     | 1          | $20            | $20       |                    |             | 
| 5.Testing                              |            |                |           | $19,450            | 34.74%      | 
|         5.1 Test Manager               | 50         | $70            | $3,500    |                    |             | 
|         5.2 Test Lead                  | 145        | $60            | $8,700    |                    |             | 
|         5.3 Project Team members       | 145        | $50            | $7,250    |                    |             | 
| Total Project Cost Estimates           |            |                |           | $55,980            | 100%        | 

[Cost Estimation Link](https://github.com/raybox94/PuMpup/blob/master/docs/CostEstimation.xlsx)

#### Work Breakdown Structure(WBS)

[JIRA Link](https://raybox94.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=PQ&view=planning&selectedIssue=PQ-5&epics=visible)

### Project schedule management plan

- [Gantt Chart Link](https://github.com/raybox94/PuMpup/blob/master/docs/gantt_chart.mpp)
- [JIRA Link](https://raybox94.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=PQ&view=planning&selectedIssue=PQ-5&epics=visible)
- [Sprint Backlog link](https://raybox94.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=PQ)
- [Gantt Chart Image Link](https://github.com/raybox94/PuMpup/blob/master/docs/gantt_chart.png)
![](https://github.com/raybox94/PuMpup/blob/master/docs/gantt_chart.png)

### Project cost management plan

The budget for the project is $55,980 the project manager will provide required funds to different department according to the budget.

[Cost Estimation Link](https://github.com/raybox94/PuMpup/blob/master/docs/CostEstimation.xlsx)

### Project Quality Management Plan

#### Introduction
This Quality Management Plan defines the acceptable level of quality and describes how the project will ensure this level in its deliverables and work processes. Our project cannot be successful if the end products we deliver are not high quality and in line with the requirements and expectations of the clients.

#### Metrics for Quality
The Quality of this project is measured using the defects count, use of Human Resources, performance and the User ratings.

Following are the formula we will be using to calculate various metrics for testing:
- Passed Test Cases Percentage = (Number of Passed Tests/Total number of tests executed) * 100
- Failed Test Cases Percentage = (Number of Failed Tests/Total number of tests executed) * 100
- Fixed Defects Percentage = (Defects Fixed/Total Defects Reported) * 100
- Critical Defects Percentage = (Critical Defects / Total Defects Reported) * 100
- Rework Effort Ratio = (Actual rework efforts/ total actual efforts) * 100


For all high risk, services are required. For medium risk, services should be considered.

| S No | Defect Level       | Defect Name                                | Measurements|
|------|--------------------|--------------------------------------------|-------------|
| 1    | High-Level Defects | Wrong Estimation, Not allocating work to an ideal individual, Planning errors                           | Project estimation should be proficient more suitably and enough time should be given to evaluate the project.|
| 2    | Mid-level Defects  | Bugs, Integration issues                                      | Bugs are standard in any project so suitable testing and quality affirmation should be actualized.|                                          
| 3    | Low-level Defects  | Screen Resolution                         | Screen resolution of the PCs won't not be awesome which may not be a tremendous issue but instead work should be conceivable better if it is as per the particulars|

#### Quality Control
Quality control focuses on the project's deliverables. Quality control monitors the results of the project to ensure that the products are good, and the customer satisfied.

The following identifies:
-	The major deliverables of the project that will be tested for acceptable quality level. 
-	The quality standards and customer satisfaction criteria established for the project deliverable.           Included are any organizational standards that need to be followed.
-	The quality control activities that will be executed to monitor the quality of the deliverables.
-	How often or when the quality control activity will be performed.
-	The name of the person responsible for carrying out and reporting on the quality control activity.


#### Quality Assurance
Quality assurance focuses on the processes employed in the project. Quality assurance ensures effective use of project processes to produce project results of high quality. It involves observing and meeting standards, improving project work continuously and correcting project failures.
The following table identifies:
-	The project processes subject to quality assurance.
-	The quality standards and stakeholder expectations for that process.
-	The quality assurance activity – e.g., quality audit or reviews, code review - that will be executed to monitor that project processes are properly followed. 
-	How often or when the quality assurance activity will be performed.
-	The name of the person responsible for carrying out and reporting on the quality assurance activity.

#### Roles and responsibilities

| S No | Name       | Role        | Quality Responsibility   |
|------|------------|-------------|--------------------------|
|1     |Rayaan Ahmed|Web Developer|Quality Approver|
|2     |Ankit Prakash|UI Developer|Quality Assurance|
|3     |Mushafiq Fakki|Team Lead|Quality Auditor|
|4     |Varun Anugu|Project manager|Quality Monitoring|

#### Quality Tools
The following are examples of tools that can be used to support quality management implementation.

- **Cost Analysis:**
Compares the cost of the quality process to the expected benefit
- **Control Chart:**	
Used to determine if a process is stable or predictable, within limits
- **Benchmarking:**	
Compares current project processes to comparable projects 
- **Statistical Sampling:**	
Choosing a representative sample from a population of interest for inspection

### Project resources management plan

The resource management plan involves creating plans and processes so that the resources are managed properly.

#### Project organizational chart

![](https://github.com/raybox94/PuMpup/blob/master/docs/ProjectOrganiastionalChart.png)

#### Responsibility assignment matrix

[Responsibility assignment matrix link](https://github.com/raybox94/PuMpup/blob/master/docs/ResponsibilityAssignmentMatrix.xlsx)

![](https://github.com/raybox94/PuMpup/blob/master/docs/ResponsibilityAssignmentMatrixImage.PNG)

### Project communication management plan

Good communication is critical component of project success. Communication management gives information needed for stakeholder for communication needs. Communication could be emails, phone calls, weekly meetings. The contact details of all stakeholders and their documents are shown in stakeholder communication analysis table.

#### Contents in the project communication management plan

1. Information to be communicated, including format, content, and level of detail
2. Who will receive the information and who will produce it
3. Suggested methods or technologies for conveying the information
4. Frequency of communication
5. Escalation procedures for resolving issues
6. Revision procedures for updating the communications management plan
7. A glossary of common terminology
8. Stakeholder communications requirements

#### 1. Information to be communicated, including format, content, and level of detail

- The information related to the project will be communicated through email or slack group.
- The progress of the project will be shared or modified using git.

#### 2. Who will receive the information and who will produce it

- If any requirement is missing it is communicated with project manager then clien to set up the meeting.
- Information regarding project progress will be sent by team lead or project manager through emails.
- Status report will be sent to project manager through emails.

#### 3. Suggested methods or technologies for conveying the information

- We can use Gmail, Google Drive and Google Docs to share information regarding project.
- We can use JIRA for keeping track of project and it progress.

#### 4. Frequency of communication

- There will be regular meetings and face-to-face interactions. If team members are across different countries then communicatio will be done through video call.
- There will be oral communication via meetings among team members.

#### 5. Escalation procedures for resolving issues

- Every issue which is raised must provide a ticket and solved based on priority.
- Every issue should be reported to the superiors.

#### 6. Revision procedures for updating the communications management plan

Updated through collaborative tools like google docs, share point and google calender.

#### 7. A glossary of common terminology

- **Stakeholder:** The people who will be affected from the project.
- **Escalation:** Calling upon higher level to resolve issue.
- **Project Manager:** The person who overall charge of the planning and execution of project.

#### 8. Stakeholder communications requirements

|Stakeholders|Document Name|Document Format|Contact Person|Due Date|
|------------|-------------|---------------|--------------|--------|
|Program Manager	|Project status report |Email |s533987@nwmissouri.edu |Every week|
|Project Manager |Project status report |Email |raybox94@gmail.com |Every week|
|Team Lead |Project status report |Email |raybox94@gmail.com |Every week|
|Team member |Project documents |Email |s534120@nwmissouri.edu |Daily|
|Team member |Project documents |Email |s533987@nwmissouri.edu|Daily|
|Team member |Project documents |Email |s534089@nwmissouri.edu |Daily|
|Test Engineer |Test reports |Reports |s534089@nwmissouri.edu  |End of the each task|
|Sponsor |Budget analysis |Report |s534120@nwmissouri.edu |One month before the project starts|

### Project risk management plan

The main goal of the risk management plan is to reduce the number of risks associated with the project. This management plan will highlight various potential risks and also will control these risks in order to achieve goal. There are various tools and techniques such as SWOT analysis, The Delphi Technique, Interviewing etc. This will be documented by the stakeholders in the form of assessment activities.

#### Methodology

Management of Life-cycle will be the key to mitigate risks in an ongoing process. Life-cycle management involves all the stakeholders such as:

1. IT staff
2. Development staff
3. Support personnel
4. Sponsor
5. Vendors
6. Contractors

The framework phase involves interviews and Delphi techniques, planning the risk, analyzing them and mitigating.

#### Roles and Responsibility

- Project Manager - Rayaan Ahmed - Approve or disapprove the task
- Team Lead - Ankit Prakash - Analyse Financial and marketing risk
- Team Member - Mushafiq Fakki - collects and analyze the risk
- Team Member - Varun Anugu - collects and analyze the risk
#### Budget and Schedule:

- A proper analysis of deviation in the budget is done regularly using gantt chart and burndown chart so, if there are any irregularities actions will be taken to resolve the issue.
- Inclusion of Active Risk Management(ARM) helps to solve any ucertainty with the project schedule.

#### Risk categories:

- **External:** Government related, Regulatory, environmental and market-related.
- **Internal:** Service related, Customer satisfaction related, Cost related and Quality related.
- **Technical:** Any change in technology related or bugs in code.
- **Unforeseeable:** Some risk about 9-10% can be unforeseeable risk.

#### Risk probability and impact

Risks are rated from low to high and these could impact project's scope, time, cost and quality.

#### Revised stakeholder tolerances

All the changes mentioned by the stakeholder will be marked and noted during risk management plan.

#### Reporting formats

We will use issue tracker in github to post issue. We would also use google document to note the issue. A weakly report about issues will be sent to project manager.

#### Tracking

Tracking the documents, auditing of risk management plan and monitoring the issue tracker in github will be done.

#### Risk Register

Risk ID| Rank | Name | Description | Category | Root Cause | Triggers | Responses | Risk Owner | Probability | Impact | Status | 
---|---|---|---|---|---|---|---|---|---|---|---|
R101| 1 |  Scope Change | Changes are inevitable during the course of the development lifecycle, and there are various reasons why changes occur. Some of these reasons are technical, some are procedural, some are financial, and still some are political or people-related | Process Risk | Improper Scope estimations/Improper deliverable | Product owners dissatisfaction | Risk Mitigation | Project Manager | High | High | Prediction |
R102| 2 | Inexperience Resources | If the manager do not have enough experience to correctly estimate the project budget which could cause cost overrun. | Financial/People | Improper cost estimations | Increased cost/dissatisfaction in salaries | Risk Acceptance | Financial Manager | Medium | High | Prediction |
R103| 3 | Absence of Management Support | If there is no proper support from top management, the team might show little interest on the project | Structure Risk | Lack of commitment | Lack of the technical knowledge | Risk Avoidance | Project Manager & Team | low | Medium | Avoided|
R104| 4 | Team member departure | If a team member leaves the job, it would be difficult to manage the  project. Even after appointing a new member knowledge transfer might take time. This impacts the schedule of the project | People Risk | Lack of motivation | dissatisfied team member | Risk Mitigation | Project Manager | Medium | low | Expected | 
R105| 5 | Natural Disaster | It is impossible to control the weather. So, there is no chances to plan and mitigate the natural disasters. | Financial Risk | Not preparing Disaster Recovery Plans | Lack of preparation | Risk Acceptance | Organization | low | Medium | Anticipated | 
R106| 6 | Schedule changes | A small change in schedule might affect the entire process because every step in the project is interlinked with something else. For example, there might be task B which can be done after completing task A. If there is a delay in task A the delay continues in task B| Process Risk | wrong estimation of time | unable to finish the scheduled work on time | Risk Mitigation | Project Manager & Team | High | High | Expected |


#### Risk Mitigation Strategies

Sno.| Risk | Risk Mitigation Strategy | Responsibility |
---|---|---|---|
1 | Market Risk | Constantly analysing the changing market scenarios and customer expectations. Adopting any major change in the market trends.| Project Manager |
2 | Financial Risk | Keeping the budget in check by avoiding unwanted and extravagant change requests. Using various project management tools to monitor the cost of the project. Giving enough authority to Project Manager to take urgent decisions. | Project Manager|
3 | Technology Risk | Maintaining the coding convention and following the standard techniques.  | Project Manager & team |
4 | People Risk | Reducing the turnover rate by paying adequate salary as per the market standards. Providing training to the staff for their self development and satisfaction | Project Manager |
5 | Process Risk | Constantly contolling and monitoring the project cost and schedule estimation of the project  | Project Manger |


### Project procurement management plan

#### Statement of Work



#### Request for proposal

Request for Proposal(RFP)

-	Purpose of RFP: To create web application which helps people to understand 10 knowledge areas and 5 process groups in project management and provide quiz for knowledge and process group.

-	Software Environment:

	    1. Visual Code 1.34
	    2. PHP 7.0
	    3. Use of MySQL as the main database.

-	Possible Appendices:

    a.	System Requirements:

        Any mobile device and laptop with Web Broswer

    b.	Required Contents of Vendor’s Response to RFP:

        i.	Cost
        ii.	Time
        ii.	Quality
        iv.	Technical Experience.

    c.	Model Contract:
    
        The project should be completed within the said deadline. If all the requirements are met, we shall discuss and move forwards for other requirements later



### Project stakeholder management plan

#### Stakeholder register

| Name of the Stakeholder 	| Role in the project 	| Department               	| Type of Stakeholder 	| Expectations                                     	| Contact Info           	|
|-------------------------	|---------------------	|--------------------------	|---------------------	|--------------------------------------------------	|------------------------	|
| Dr.Denise Case          	| Mentor              	| Applied Computer Science 	| External            	| Provide review comments and suggest improvements 	| dcase@nwmissouri.edu   	|
| Rayaan Ahmed            	| Developer           	| Applied Computer Science 	| Internal            	| Develop ,test and validate code                  	| s534118@nwmissouri.edu 	|
| Ankit Prakash           	| Developer           	| Applied Computer Science 	| Internal            	| Develop,test and validate code                   	| s533987@nwmissouri.edu 	|
| Sai Varun Reddy Anugu   	| Developer           	| Applied Computer Science 	| Internal            	| Develop,test and validate code                   	| s34089@nwmissouri.edu  	|
| Mushafiq Fakki          	| Developer           	| Applied Computer Science 	| Internal            	| Develop,test and validate code                   	| s534120@nwmissouri.edu 	|


#### Stakeholder analysis

| Name             | Level of Interest | Level of Influence | Potential Management Strategies                                                                                                                                                                                                                                   | 
|------------------|-------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| Rayaan Ahmed     | High              | Leading            | Has Good Management Skills, Leadership quality. Managed the project communicate with client and acts as a catalyst & bridge within team and Client. Analyzing each task and its implementation.                                                                    | 
| Ankit Prakash    | High              | Supportive         | He has good commanding skills and good at programming. He can monitor the project status                                                                                                                                                                          | 
| Mushafiq Fakki   | High              | Supportive         | Has the ability to be in collaboration with the core business units and the Information Services Department to translate user requirements, develop and coordinate user testing, and assist in training and implementation of new systems or system enhancements. | 
| Anugu Varun      | High              | Testing            | Has good analytical skills to think out of the box and try to test to product from customer point of view.                                                                                                                                                        | 
#### Issue log


| Sl no | Issue Description                    | Impact on Project                        | Date Reported | Reported By   | Assigned To     | Priority(M/H/L) | Due Date  | Status | Comments
|-------|--------------------------------------|------------------------------------------|---------------|---------------|-----------------|-----------------|-----------|--------|---------------------------------------------------------------------------------------------------|
| 1     | Requires a list of suppliers         | Process evaluation will be delayed       | May 30th      | Ankit Prakash | Mushafiq Fakki  | M               | July 30th | open   | "Pending, Few issues has to be sorted"                                                            | 
| 2     | Cost estimation may increase         | Budget will exceed the estimation        | June 12th     | Ankit Prakash | Varun Sai Reddy | H               | June 20th | Closed | After proper estimation and meetings with stakeholders the cost estimation issues have been fixed | 
| 3     | Probability of project getting delay | Go-live of the project date will be late | July 21st     | Ankit Prakash | Rayaan Ahmed    | H               | Aug 01st  | open   | Few adjustments need to be done in the tasks and hire technical resources to finish the tasks     |
| 4     | Serialization issue while testing | Unit testing may get delayed | june 5th     | Ankit Prakash | Rayaan Ahmed    | H               | june 5th  | closed   | changed normal equals to deep equals in the conditional statement    | 

