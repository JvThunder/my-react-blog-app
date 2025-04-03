Hello fellow readers, I am Joshua Adrian Cahyono, a Year 3 student at NTU studying Data Science and AI. As of the time of writing this, I have been learning and doing AI research for nearly 3 years.

I want to share my journey into AI and how I got started with AI, as well as a bit of my personal tips on how to navigate through AI research as a student. Though I may not be as good or experienced as industry experts and researchers in AI, neither am I the best student researcher in NTU, I do hope I bring light some insights to the table especially for NTU students in starting their AI journey.

# My Personal Journey into AI

## Where it all began...

The word "AI" has been around for quite a while, but it has only recently become a real game changer. The first real instance of me being interested in AI was when I was in highschool just before going to university.

Do note that there was no ChatGPT yet at the time. However, I was first fascinated by the [documentary](https://www.youtube.com/watch?v=WXuK6gekU1Y) on AlphaGo by Deepmind. As a chess and go player, I was amazed by the fact that a computer program could beat the best players in the world in a game that is considered to be "impossible" for a computer to win against humans for a long time, due to the complexity of the game, sheer size of search space, and its "creative" nature. However, brilliant scientists at DeepMind managed to achieve this feat. Over time, many other AI breakthroughs were made, like ChatGPT and DALL-E, and the field of AI has been growing rapidly ever since. These innovations have been changing the world and our lives in many ways, and it is exciting to not only see the progress, but also be part of it.

## The Start of My AI Journey
It was for the excitement of these AI innovations that I decided to go apply to Data Science and AI at NTU. At that time, I cannot wait to start learning even before entering university. This was when I first started learning from the [Deep Learning Course](https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning) offered by DeepLearning.ai. (and I still highly recommend it for beginners in Deep Learning!) As someone into math, I was very excited to learn about the math behind neural networks, and how they are trained using gradient descent. It feels amazing to see the math I love transformed into real life applications. The capstone project in the course was also a great experience as I got to apply the knowledge and implement a simple neural network from scratch.

<figure style="text-align: center;">
  <img src="../images/cat-vs-dog.jpg" alt="First Capstone Project: Cat vs Dog">
  <figcaption>Figure 1: My first neural network for cat vs dog classification</figcaption>
</figure>

From there I started to learn more about AI and the subfields of AI, such as Computer Vision, Natural Language Processing, RL, and more. After ChatGPT's release, I also started to learn about the latest research in AI, such as Generative AI, and the latest breakthroughs in the field. I will list more of my learning resources in the [Learning Resources](#learning-resources) section.

## Research Experiences

### 1. MLDA (Machine Learning Data Analytics) Research Group (Year 1) - Visual Retrieval

I started my AI research journey in Year 1 as part of MLDA at NTU, a group focused on applying machine learning to real-world problems. Fresh out of my courses and still exploring my interests, I joined the research team and was assigned to a collaborative project with Huawei on optimizing models for **Visual Retrieval from image and modification prompt**, mentored by Huawei researchers.

As a team of five with little research experience, the project was daunting. Our collaboration with Huawei researchers was challenging, as their availability was limited, and we were still grasping the fundamentals of research. Despite this, it was an invaluable experience. It was my first time working in a research team, and I learned a lot.

We began with a literature review on Visual Retrieval, taking turns presenting papers and brainstorming improvements. I loved the process of discussing new ideas and experimenting with solutions. However, implementing our approach was tough, especially since I was new to PyTorch and had to learn it on the go. In the end, we managed to implement it yet unable to improve the performance significantly. Although we didn’t complete the project, I have no regrets. It deepened my passion for research and even helped me land my first research internship. [Github](https://github.com/JvThunder/BLIP)

<figure style="text-align: center;">
  <img src="../images/va-architecture.png" style="width: 50%;" alt="Visual Retrieval Architecture">
  <figcaption>Figure 2: Our Architecture Idea for Visual Retrieval Based on BLIP</figcaption>
</figure>

### 2. A*STAR Internship (Year 2) - Offline RL for Medical Recommendation

During my first summer as an undergraduate, I spent my time productively by taking additional courses in AI and exploring other CS topics like cybersecurity and quantum computing. However, I found myself bored and wanting to work on more engaging projects. Fortunately, after speaking with a senior who was conducting research at A*STAR, I decided to take a chance and apply for an internship through their portal while also cold-emailing one of the scientists. I had no high expectations, but to my surprise, I was called for an interview and was subsequently offered the internship. I will share tips for technical interview in the [Tips](#tips) section.

I was excited to be given this opportunity, so I spent the remaining time before my internship to learn more about RL and offline RL and read some biological background on the topic. This is also when I read [Sutton's RL book](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf) (would highly recommend for RL beginners). Afterwards, I tried cloning previous works and try to run simple experiments on it. 

I continued working on this project throughout my third and fourth semesters, where I implemented a data processing pipeline using Google BigQuery, Pandas, and NumPy, along with a simple offline RL algorithm in PyTorch. The work was roughly split—50% data science and 50% ML modeling—providing me with well-rounded exposure. However, this experience also helped me realize that I enjoy building ML applications and models more than working with data and statistics (though I still believe that understanding both is essential for a good ML engineer and researcher). In the end, we published a software IP and prepared a paper for a journal. This opportunity boosted my confidence in my ability to learn new concepts and apply them to real-world problems. 

### 3. NTU URECA (Year 2) - LMMs Benchmarks and Evaluations Pipeline

In parallel to my A*STAR internship, I realized that NTU has a research program called URECA, where students can join as a part time research assistant. At this point, I just read through different researches of NTU professors. One that really impressed me was [Assistant Prof. Ziwei Liu's](https://scholar.google.com.hk/citations?user=lc45xlcAAAAJ&hl=en) work on Computer Vision. Again, testing my luck, I emailed him mentioning my interest in his work and joined his lab. We had a quick chat and meeting and I was assigned to work on a project to develop a pipeline for evaluating and benchmarking LMMs. Truth was I was planning to do more on Computer Vision or RL, and NLP and LLMs were still a bit of a mystery to me.

However, I believe that this opportunity would not come often, so I decided to take it anyways. I joined the lab and was assigned to work on a project to develop a pipeline for evaluating and benchmarking LMMs. This was a great experience as I got to work directly with PhDs and was treated like a part time research assistant. I got to learn a lot about LLMs and the latest research in the field. This was also the time I started reading more of the recent LLM works which I was intimidated by before. I realize that most of the breakthroughs in the field are due to the simple yet effective ideas, and that I can understand the math and the concepts behind the models.

Admittedly, I was not given the flexibility or the autonomy to conduct my own research. Nonetheless, I was able to learn a lot from helping the PhDs for a year on this project and I was able to be co-authors on 2 papers on the topic, one about the [Otter-2](https://github.com/EvolvingLMMs-Lab/Otter) model and another about [LMMS-eval](https://github.com/EvolvingLMMs-Lab/lmms-eval) pipeline.

### 4. Continental Internship (Year 3) -  Autonomous Mobile Robot Navigation

Going to the next summer, I was again excited to look for an internship. Just to be sure, I tried looking early. At this time, I remembered [Terence](https://scholar.google.com/citations?user=kwjzdvUAAAAJ&hl=en), a graduate with extensive experience in the AI industry who had also been one of my tutors in a previous course. Recalling our conversations, I reached out to ask if Continental was hiring. To my surprise, he invited me for an interview.

During the interview, I shared my experiences in MLDA, since I had yet to complete my A*STAR and URECA research at the time. Shortly after, I was offered an internship to work on Autonomous Mobile Robot Navigation under Terence’s supervision, which I eagerly accepted. I had been fascinated by robotics since childhood, inspired by countless sci-fi movies, so this opportunity felt like a perfect fit.

Not long after, I met Huy, the Head of the Robotics branch in MLDA. I explained my interest and experience in AI in general. In the end, I joined him to join the [ICRA BARN challenge](https://cs.gmu.edu/~xiao/Research/BARN_Challenge/BARN_Challenge25.html). In this competition, we developed an MPC mode-switching algorithm, which led us to win second place! It was a great experience and it was also my first time ever going to an academic conference, which took place in Japan (a country I absolutely love!). [Github](https://github.com/MLDA-NTU/mlda-barn-2024)

Surprisingly, the competition aligned closely with my internship project, as both involved using the **Jackal** robot. However, my internship challenge was to develop and adapt **Diffusion Planners** for the robot to navigate in dynamic environments. This was an entirely new area for me, requiring me to read multiple papers, adapt research ideas, and engineer solutions to test on the robot. The experience was a perfect balance of research (50%) and engineering (50%), and I thoroughly enjoyed the process of bringing theoretical concepts to real-world applications.

### 5. Temasek Lab Internship (Present) - Interpretability of ViT models

This brings us to my current internship at Temasek Lab, where I am working on the interpretability of ViT models. From this internship, I have learned a lot about the latest research in ViT models and the importance of interpretability in the field. I have not completed this yet, so I will update this section when I have more to share.

### Future Plans (Year 4)

Recently I've been interested in the problem of AI Safety, including AI Alignment, AI Control and AI Policies. I hope I can explore this area more and contribute to this field with my own research.

### Conclusion 

What a journey all this has been! As I am writing this, I realized that I have been through quite a lot in the past 3 years, and I can feel the growth in my skills and knowledge. I also realized that there are many "luck" involved in my journey, where a lot things seem to fall into place. To me, I am sure this is all part of God's plan for me, and I am grateful for the opportunities and experiences I have been given.

Still, this is just the beginning and I have a long way to go. I will continue to share my journey and learnings in this blog, and I hope you will find it useful!

# Learning Resources

## Fundamental Courses (Good Theory and Math)
These courses are highly recommended for beginners in AI, as they provide a solid foundation in the mathematical and theoretical aspects of the field. They serve as an excellent starting point for AI enthusiasts and typically include a capstone project, allowing learners to apply their knowledge in a practical setting. While beneficial for AI engineers, mastering these concepts is essential for aspiring AI researchers.

- [Deep Learning Specialization](https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning) is a good starting point for beginners in Deep Learning.
- [Machine Learning Specialization](https://www.coursera.org/learn/machine-learning?specialization=machine-learning) is a good to know the more traditional ML concepts.
- [RL Specialization](https://www.coursera.org/specializations/reinforcement-learning) is an amazing course for beginners in Reinforcement Learning.
- [Mathematics for Machine Learning](https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science) is a good course if you are not comfortable with the math or want to refresh your knowledge. Calculus, Linear Algebra, and Probability are used all the time in AI research. 
- All the other courses offered by [DeepLearning.ai](https://www.deeplearning.ai/courses/) are also great, and I highly recommend them!


## Practical Courses (Good for Applying AI to Real-World Problems)

These are the courses that are more practical and applied, and are a good starting point for beginners in AI. 
- [Worldquant Applied Data Science Lab](https://www.wqu.edu/adsl?utm_term=worldquant%20university%20data%20science&utm_campaign=GA_Brand_SEA_Africa%2BAsia_WW&utm_source=adwords&utm_medium=ppc&hsa_acc=1450481729&hsa_cam=21978146302&hsa_grp=171109972549&hsa_ad=723883723654&hsa_src=g&hsa_tgt=kwd-874815672211&hsa_kw=worldquant%20university%20data%20science&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPphoDw2DoKPRHHzUR0vtroIr5iilRr6oYIg9R65EkrgOT6FZjRFOyIRoCwjgQAvD_BwE) perfect for those more into the Data Science part, learning all the necessary libraries and common techniques.
- [Huggingface Courses](https://huggingface.co/learn) is a good course for beginners. The NLP and Computer Vision courses are especially recommended!
- [Kaggle Courses](https://www.kaggle.com/learn) is a good course for beginners. The courses are project based and integrate well with the Kaggle platform and datasets.

## More Resources

After you have a good foundation in the fundamental courses, you can and should explore more about the latest research in AI. Be comfortable with diving into papers and the latest research. Also, not all papers are math heavy, so do not be afraid to read them! Here are some resources that I recommend:
- [Paper with Code](https://paperswithcode.com/) is a great resource to find the latest research in AI.
- [Huggingface Daily Papers](https://huggingface.co/papers) is a great resource to find the latest research in NLP and Computer Vision.
- [NeurIPS](https://neurips.cc/virtual/2024/events/workshop) go to NeurIPS or any of top AI conferences and watch their presentation. They provide the slides and videos of the presentations online for free after the conference!

# Tips

## Is ML Research for me?
TODO

## For Technical Interview

I have been through technical interviews, and I have some tips that I think are useful for those who are preparing for technical interviews.
- Practice Leetcode and other coding platforms - Surprisingly, this is still used even for ML research roles, so it is still important to be comfortable with it. But I do not recommend spending too much time on it, as it is not the main focus of AI research.
- Review basics of ML and AI - This is a must, as it is the foundation of AI research.
- Review Statistics and Probability - One time I fumbled an interview just because I forgot some statistical concepts. It is important to be comfortable with this.

## Other General Tips
- Try implementing the famous papers: Sometimes you might read and assume you understand the paper, but when you try to implement it, you will realize you have a lot of things to learn. This is a great way to understand the paper better and apply your knowledge to real-world problems. This is also a good way to prepare for your own research.
- Try to join a research group or lab: This is a great way to learn and get exposure to the latest research in AI. This is also a place to see whether you would enjoy the research and the work culture.
- Join a hackathon: This is a great way to apply your knowledge to real-world problems and get exposure to the latest research in AI. However, I personally do not recommend joining too much of these, especially since most hackathons are half-baked ideas and implementations and not aligned with research where you need to spend time on the research.
- Just start: Whatever you want to try, just try it. I personally believe that the best way to learn is to just do it. You will learn a lot by just doing it. Don't be intimidated by the math or the complexity of the problem. If you wait to exhaustively learn all the prerequisites of current AI research, you will never start.