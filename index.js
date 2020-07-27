var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json()); // JSON encoded body
app.get("/", function (req, res) {
  res.send("Hi! I am a ChatBot.");
});
app.post("/postMessage", function (req, res, next) {
  let message = req.body.message.toLowerCase();
  switch (message) {
    case "hello": {
      res.send({
        bot_message:
          "Hi, how may I help you?" +
          "Please reply with the numbers" +
          "1.) General IP Queries 2.) Learning Path 1 3.) Learning Path 2 4.) Learning Path 3 5.) Live Projects",
      });
      break;
    }
    case "*": {
      res.send({
        bot_message:
          "1.) General IP Queries 2.) Learning Path-1 3.) Learning Path-2 4.) Learning Path-3 5.) Live Projects",
      });
      break;
    }

    case "1": {
      res.send({
        bot_message:
          "1a.) IP Start date. 1b.) IP End date. 1c.) Prerequisites 1d.) Eligibility 1e.) Bitrix24 account 1f.) Job Profile 1g.) Total Workgroups 1h.) After Joining group 1i) Tasks not visible 1j.) Work Report 1k.) Multiple Training 1l.) Technology Switching 1m.) Workgroups not visible  1n.) Exit",
      });
    }
    case "1a": {
      res.send({
        bot_message: "IP start date is from March",
      });
    }
    case "1b": {
      res.send({
        bot_message: "IP end date is in last week of July",
      });
    }
    case "1c": {
      res.send({
        bot_message: "There is no prerequisites for the IP",
      });
    }
    case "1d": {
      res.send({
        bot_message:
          "Currently enrolled in graduate program and is from Maharashtra",
      });
    }
    case "1e": {
      res.send({
        bot_message:
          "Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in          ",
      });
    }
    case "1f": {
      res.send({
        bot_message:
          " Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies.",
      });
    }
    case "1g": {
      res.send({
        bot_message:
          "1. 202003-IP -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup. 2. 202003-IP-Technology -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example 202003-IP-Python for students who enrolled for python.If anyone has not been added to any of these workgroups, kindly message Cloud Counselage HR  regarding the same over bitrix24 platform.",
      });
    }
    case "1h": {
      res.send({
        bot_message:
          "Please go through the mail from which you have accepted the invite and check the task section as well",
      });
    }
    case "1i": {
      res.send({
        bot_message:
          " Please remove the default In Progress from your filter of the task section and try",
      });
    }
    case "1j": {
      res.send({
        bot_message:
          "    As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on send to supervisor        ",
      });
    }
    case "1k": {
      res.send({
        bot_message:
          "You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.",
      });
    }
    case "1l": {
      res.send({
        bot_message:
          "You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now",
      });
    }
    case "1m": {
      res.send({
        bot_message:
          " Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName. Ex 202003-IP-DevOps. In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup.",
      });
    }
    case "1n": {
      res.send({
        bot_message: "Press * for General Menu",
      });
    }
    case "2": {
      res.send({
        bot_message:
          "2a.) LP1 start date 2b.) LP1 page token 2c.) LP1 registration 2d.) LP1 login issues 2e.) Token issues 2f.) Certificate 2g.) Training Results 2h.) After Completion 2i.)LP1 task button 2j.) LP1 progress 2k.)Exit",
      });
    }
    case "2a": {
      res.send({
        bot_message: "LP1 starts 01/03/2020        ",
      });
    }
    case "2b": {
      res.send({
        bot_message:
          "Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos.",
      });
    }
    case "2c": {
      res.send({
        bot_message:
          "    Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.",
      });
    }
    case "2d": {
      res.send({
        bot_message: "Ensure you're using the right token",
      });
    }
    case "2e": {
      res.send({
        bot_message:
          " For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.",
      });
    }
    case "2f": {
      res.send({
        bot_message:
          "Certificate is not compulsory, but please ensure you complete the training.",
      });
    }
    case "2g": {
      res.send({
        bot_message:
          "They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training.",
      });
    }
    case "2h": {
      res.send({
        bot_message:
          "There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin.",
      });
    }

    case "2i": {
      res.send({
        bot_message:
          "You can go back to that task and then click on 'More' and then 'resume' to restart that task.        ",
      });
    }
    case "2j": {
      res.send({
        bot_message:
          "There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.",
      });
    }
    case "2k": {
      res.send({
        bot_message: "Press * for General Menu and 2 for LP1 menu",
      });
    }
    case "3": {
      res.send({
        bot_message:
          "3a.) LP2 start date 3b.) LP2 training type 3c.) LP2 training certification 3d.) LP2 video loading issues",
      });
    }
    case "3a": {
      res.send({
        bot_message: "LP2 start date is 18/03/2020",
      });
    }
    case "3b": {
      res.send({
        bot_message:
          "The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.",
      });
    }
    case "3c": {
      res.send({
        bot_message:
          "Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in.",
      });
    }
    case "3d": {
      res.send({
        bot_message:
          "We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection",
      });
    }
    case "4": {
      res.send({
        bot_message: "4a.) LP3 start date 4b.)LP3 training type 4c.) After LP3",
      });
    }
    case "4a": {
      res.send({
        bot_message:
          "LP2 start date is 02/04/2020.    All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame.",
      });
    }
    case "4b": {
      res.send({
        bot_message:
          "LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.",
      });
    }
    case "4c": {
      res.send({
        bot_message:
          "You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.",
      });
    }
    case "5": {
      res.send({
        bot_message:
          "5a.) Live Projects start date 5b.) Live Projects(Individual/Group) 5c.) Live Projects technology 5b.) After Live Projects",
      });
    }
    case "5a": {
      res.send({
        bot_message: "Live Projects starts from July",
      });
    }
    case "5b": {
      res.send({
        bot_message: "All the LP3/  Live Projects are on an individual scale.",
      });
    }
    case "5c": {
      res.send({
        bot_message:
          "Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.",
      });
    }
    case "5d": {
      res.send({
        bot_message:
          "Submit your project and once it's reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you're interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.",
      });
    }

    default: {
      res.send({
        bot_message: "Sorry I didn't understood",
      });
    }
  }
});
var server = app.listen(3001, function () {});
console.log("Listening to server at port 3001");
