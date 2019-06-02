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

| **WBS Items**                              | **Units/Hrs.** | **Cost/Unit/Hrs.** | **Subtotals** | **WBS Level 2 totals** | **% of totals** | 
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
- [Gantt Chart Image Link](https://github.com/raybox94/PuMpup/blob/master/docs/gantt_chart.png)
![](https://github.com/raybox94/PuMpup/blob/master/docs/gantt_chart.png)
- [JIRA Link](https://raybox94.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=PQ&view=planning&selectedIssue=PQ-5&epics=visible)
- [Sprint Backlog link](https://raybox94.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=PQ)

### Project cost management plan

The budget for the project is $55,980 the project manager will provide required funds to different department according to the budget.

[Cost Estimation Link](https://github.com/raybox94/PuMpup/blob/master/docs/CostEstimation.xlsx)

### Project Quality Management

#### Introduction
This Quality Management Plan defines the acceptable level of quality and describes how the
project will ensure this level in its deliverables and work processes. Our project cannot be successful if the end products we deliver are not high quality and in line with the requirements and expectations of the clients.

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


#### Quality Tools
The following are examples of tools that can be used to support quality management implementation.

##### Cost Analysis
Compares the cost of the quality process to the expected benefit
##### Control Chart	
Used to determine if a process is stable or predictable, within limits
##### Benchmarking	
Compares current project processes to comparable projects 
##### Statistical Sampling	
Choosing a representative sample from a population of interest for inspection
