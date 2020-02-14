CREATE DATABASE Ebloom;

CREATE TABLE IF NOT EXISTS surveys
  (
     id         INT PRIMARY KEY NOT NULL auto_increment,
     name       VARCHAR(50),
     date       DATE,
     type       VARCHAR(100),
     company    VARCHAR(100),
     questions  JSON,
     created_at TIMESTAMP
  ) insert INTO `surveys` (`id`, `name`, `date`, `type`, `company`, `questions`,
`created_at`) VALUES ('1', 'Choose one', '2019-04-06', 'Onboarding', NULL,
'[{\"type\": \"Individual\", \"topics\": [{\"question\": \"Test  eererre\"}, {\"question\": \"ererer erererer\"}, {\"question\": \"ererererrerer\"}]}, {\"type\": \"Team\", \"topics\": [{\"question\": \"ererererererer\"}, {\"question\": \"erererereeeeec e\"}, {\"question\": \"eeeeeerererere\"}]}, {\"type\": \"Company\", \"topics\": []}]'
, NULL);

INSERT INTO `surveys`
            (`id`,
             `name`,
             `date`,
             `type`,
             `company`,
             `questions`,
             `created_at`)
VALUES      ('2',
             'Choose one',
             '2019-04-06',
             'Onboarding',
             NULL,
'[{\"type\": \"Individual\", \"topics\": []}, {\"type\": \"Team\", \"topics\": []}, {\"type\": \"Company\", \"topics\": []}]'
             ,
NULL);

CREATE TABLE IF NOT EXISTS feedbacks
  (
     id          INT PRIMARY KEY NOT NULL auto_increment,
     user_id     INT,
     question_id INT,
     content     TEXT,
     factor      VARCHAR(50),
     category    VARCHAR(50),
     create_at   TIMESTAMP,
     answer      VARCHAR(250),
     question    VARCHAR(225),
     date        DATE
  );

CREATE TABLE companies 
   ( 
      id INT NOT NULL AUTO_INCREMENT, 
      name VARCHAR(50), administrator VARCHAR(100),  
      logo VARCHAR(300),  
      updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),   
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),  
      PRIMARY KEY(id)
    );