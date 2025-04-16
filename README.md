# React App Deployment (Manual)

This project is manually deployed using **AWS CloudFormation**, **S3**, and **CloudFront**.

---

## Deployment URLs

- **S3 Static Website URL:**  
  [http://beautyshop-react-app.s3-website.eu-central-1.amazonaws.com/cart](http://beautyshop-react-app.s3-website.eu-central-1.amazonaws.com/)

- **CloudFront Distribution URL:**  
  [https://d24wgdym3l5ulk.cloudfront.net/](https://d24wgdym3l5ulk.cloudfront.net/)

  cloudfrontInvalidate.png

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


# React App Deployment (Automated)