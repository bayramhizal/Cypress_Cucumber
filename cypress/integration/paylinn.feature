Feature: Login Test
Scenario:TC01_Login
Given go "https://www.paylinn.com" website
And click login elements
And enter username and password
And click login button
Then validate entered web-site



