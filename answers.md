1. In Jest, what are the differences between describe() and it() globals, and what are good uses for them?

- Describe is used to group tests together where it makes sense. For example all the tests related to one
  function you may want to group together under one name so it's easier, more organized and makes more sense. it() is used to define a single test. For example if you wanted to test if the function returns null if you pass in the wrong arguments you can define what you are testing and it will show up in the console with what you defined it as and if it passed or failed.

2. What is the point of Test Driven Development? What do you think about this approach?

- The point of test driven development is to avoid regressions and to make sure everything is working the way you
  think when you make changes. I think this approach has it's benifits for sure and I can see the value in learning it but I am not a huge fan of it. I might just need to use it more to get used to it but it feels about 10X slower to develop anything this way right now.

3. Mention three types of automated tests.

- There are unit tests, which are just testing one thing to make sure they handle everything the way we think
  and don't rely on other tests. There are also integration tests, which from my understanding make sure than whatever you are testing, I'll say components here, play nice together and don't interfere with the other components functionality. There is also snapshot testing, which basically takes a picture of of the whole component's html structure and if anything changes it won't pass unless you tell it that the change was okay and you wanted it. this type of test is the easiest to implement but in my mind not really the most useful. There are a lot more types of testing than that but those are the 3 that I can think of off the top of my head.
