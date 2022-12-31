Feature: Capitals

Scenario Outline: Capital Search

Given go url
Given search capital "<capital>"
Given checked capital "<capital>"

Examples:
|capital|
|Bern|
|Ankara|
|Rome|
