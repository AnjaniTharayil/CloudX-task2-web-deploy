# 1. React App Deployment (Manual)

This project is manually deployed using **AWS CloudFormation**, **S3**, and **CloudFront**.

---

## Deployment URLs

- **S3 Static Website URL:**  
  [http://beautyshop-react-app.s3-website.eu-central-1.amazonaws.com/cart](http://beautyshop-react-app.s3-website.eu-central-1.amazonaws.com/)

- **CloudFront Distribution URL:**  
  [https://d24wgdym3l5ulk.cloudfront.net/](https://d24wgdym3l5ulk.cloudfront.net/)

- **cloudFront deployed Screenshot**

  ![cloudFront deployed Screenshot](./ecommerce-app/assets/cloudFrontApp.png)

---

##  CloudFront Invalidate config

  Specified /* to invalidate all objects (updated files). 

  ![cloudFrontInvalidate Screenshot](./ecommerce-app/assets/cloudfrontInvalidate.png)

  checked and can see the changes updated on app

  ![modification Screenshot](./ecommerce-app/assets/modifiedUI.png)

---

## Deployment Process (Overview)

1. Build the React application:
   ```bash
   npm run build
  ```

# 2. React App Deployment (Automated)

- **CloudFront Distribution URL:**  
  [https://d24wgdym3l5ulk.cloudfront.net/](https://dtvx9c0bha2qn.cloudfront.net/)

## Deployment Process (Overview)

### 1. **Build the React application:**
   ```bash
   npm run build
   ```
# React App Deployment (Automated) - React App Deployment with AWS CDK

Deployment of a React application using **AWS CDK**, **S3**, and **CloudFront**, including automatic **cache invalidation**.

- **CloudFront Distribution URL:**  
  [https://d24wgdym3l5ulk.cloudfront.net/](https://dtvx9c0bha2qn.cloudfront.net/)

##Setup & Deployment

### 1. **Install Dependencies**

  ```bash
  npm install
  ```
### 2. **Bootstrap AWS (First Time Only)**
  ```bash
  npm run cdk:bootstrap
  ```
### 3. **Build & Deploy React App**

    * Builds React app
    * Uploads to S3
    * Deploys CDK stack
    * Invalidates CloudFront cache

  ```bash
  npm run aws:deploy
  ```

### 4. **Access Your App**

  After deployment, the terminal will output the CloudFront URL. Open it in your browser to view the live app.

### 5. **Cleanup**

Use npm run aws:destroy to delete all AWS resources and avoid charges.

  ```bash
  npm run aws:destroy

  ```