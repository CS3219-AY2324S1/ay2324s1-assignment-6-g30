# Assignment 6 (Serverless Functions)

1. Login into the AWS management console as the IAM user ([https://aws.amazon.com/console/](https://aws.amazon.com/console/))
2. Login with the following credentials:
    - **Account ID (12 digits):** 446174069810
    - **AM user name:** 3219-marker
    - **Password:** ilove3219!!
3. Access Lambda via the console (and ensure that you are on the us-east-1 region)

    ![Screenshot 2023-10-26 at 2.38.32 PM.png](docs/images/img1.png)
    
4. Click on the lambda function titled “auto-add-questions” and navigate to the configuration tab
    
    ![Screenshot 2023-10-26 at 2.40.13 PM.png](docs/images/img2.png)
    
5. Find the trigger “EventBridge(CloudWatch Events)” and click on the URL link
    
    ![Screenshot 2023-10-26 at 2.40.59 PM.png](docs/images/img3.png)
    

1. Enable the rule and observe that a new question will be added every 5 minutes!
    
    ![Screenshot 2023-10-26 at 2.42.04 PM.png](docs/images/img4.png)
    
2. Please disable the rule once the selected batch of questions is added