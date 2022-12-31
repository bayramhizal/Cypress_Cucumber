Feature: LOGIN manager passwords

Scenario:Manager_Id1
Given go url
Given use with data enter page

|username|password|
|Manager|Manager1!|
Given click login button
Then validate i entered website

Scenario:Manager_Id2
Given go url
Given use with data enter page
|username|password|
|Manager2|Manager2!|
Given click login button
Then validate i entered website

   