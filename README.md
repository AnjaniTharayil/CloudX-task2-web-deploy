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

  ![cloudFront deployed Screenshot](./assets/cloudFrontApp.png)

---

##  cloudFront Invalidate config Screenshot

  ![cloudFrontInvalidate Screenshot](./assets/cloudfrontInvalidate.png)

> 📌 Make sure the image file (`screenshot.png`) exists at the path `./assets/screenshot.png`. Adjust the path as needed if it's stored elsewhere.

---
## Deployment Process (Overview)

1. Build the React application:
   ```bash
   npm run build


# React App Deployment (Automated)