Hello fellow readers, I am Joshua Adrian Cahyono, a Year 3 student at NTU studying Data Science and AI. As of the time of writing this, I have been learning and doing AI research for nearly 3 years.

I want to share my journey into AI and how I got started with AI, as well as a bit of my personal tips on how to navigate through AI research as a student. Though I may not be as good or experienced as industry experts and researchers in AI, neither am I the best student researcher in NTU, I do hope I bring light some insights to the table especially for NTU students in starting their AI journey.

Feel free to skip to [Careers](#careers) to get tips on starting your AI journey!

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

We began with a literature review on Visual Retrieval, taking turns presenting papers and brainstorming improvements. I loved the process of discussing new ideas and experimenting with solutions. However, implementing our approach was tough, especially since I was new to PyTorch and had to learn it on the go. In the end, we managed to implement it yet unable to improve the performance significantly. Although we didn't complete the project, I have no regrets. It deepened my passion for research and even helped me land my first research internship. [Github](https://github.com/JvThunder/BLIP)

<figure style="text-align: center;">
  <img src="../images/va-architecture.png" style="width: 50%;" alt="Visual Retrieval Architecture">
  <figcaption>Figure 2: Our Architecture Idea for Visual Retrieval Based on BLIP</figcaption>
</figure>

### 2. A*STAR Internship (Year 2) - Offline RL for Medical Recommendation

During my first summer as an undergraduate, I spent my time productively by taking additional courses in AI and exploring other CS topics like cybersecurity and quantum computing. However, I found myself bored and wanting to work on more engaging projects. Fortunately, after speaking with a senior who was conducting research at A*STAR, I decided to take a chance and apply for an internship through their portal while also cold-emailing one of the scientists. I had no high expectations, but to my surprise, I was called for an interview and was subsequently offered the internship. I will share more on tips for technical interview in the [Tips](#tips-and-faq) section.

I was excited to be given this opportunity, so I spent the remaining time before my internship to learn more about RL and offline RL and read some biological background on the topic. This is also when I read [Sutton's RL book](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf) (would highly recommend for RL beginners). Afterwards, I tried cloning previous works and try to run simple experiments on it. 

I continued working on this project throughout my third and fourth semesters, where I implemented a data processing pipeline using Google BigQuery, Pandas, and NumPy, along with a simple offline RL algorithm in PyTorch. The work was roughly split—50% data science and 50% ML modeling—providing me with well-rounded exposure. However, this experience also helped me realize that I enjoy building ML applications and models more than working with data and statistics (though I still believe that understanding both is essential for a good ML engineer and researcher). In the end, we published a software IP and prepared a paper for a journal. This opportunity boosted my confidence in my ability to learn new concepts and apply them to real-world problems. 

### 3. NTU URECA (Year 2) - LMMs Benchmarks and Evaluations Pipeline

In parallel to my A*STAR internship, I realized that NTU has a research program called URECA, where students can join as a part time research assistant. At this point, I just read through different researches of NTU professors. One that really impressed me was [Assistant Prof. Ziwei Liu's](https://scholar.google.com.hk/citations?user=lc45xlcAAAAJ&hl=en) work on Computer Vision. Again, testing my luck, I emailed him mentioning my interest in his work and joined his lab. We had a quick chat and meeting and I was assigned to work on a project to develop a pipeline for evaluating and benchmarking LMMs. Truth was I was planning to do more on Computer Vision or RL, and NLP and LLMs were still a bit of a mystery to me.

However, I believe that this opportunity would not come often, so I decided to take it anyways. I joined the lab and was assigned to work on a project to develop a pipeline for evaluating and benchmarking LMMs. This was a great experience as I got to work directly with PhDs and was treated like a part time research assistant. I got to learn a lot about LLMs and the latest research in the field. This was also the time I started reading more of the recent LLM works which I was intimidated by before. I realize that most of the breakthroughs in the field are due to the simple yet effective ideas, and that I can understand the math and the concepts behind the models.

Admittedly, I was not given the flexibility or the autonomy to conduct my own research. Nonetheless, I was able to learn a lot from helping the PhDs for a year on this project and I was able to be co-authors on 2 papers on the topic, one about the [Otter-2](https://github.com/EvolvingLMMs-Lab/Otter) model and another about [LMMS-eval](https://github.com/EvolvingLMMs-Lab/lmms-eval) pipeline.

### 4. Continental Internship (Year 3) -  Autonomous Mobile Robot Navigation

Going to the next summer, I was again excited to look for an internship. Just to be sure, I tried looking early. At this time, I remembered [Terence](https://scholar.google.com/citations?user=kwjzdvUAAAAJ&hl=en), a graduate with extensive experience in the AI industry who had also been one of my tutors in a previous course. Recalling our conversations, I reached out to ask if Continental was hiring. To my surprise, he invited me for an interview.

During the interview, I shared my experiences in MLDA, since I had yet to complete my A*STAR and URECA research at the time. Shortly after, I was offered an internship to work on Autonomous Mobile Robot Navigation under Terence's supervision, which I eagerly accepted. I had been fascinated by robotics since childhood, inspired by countless sci-fi movies, so this opportunity felt like a perfect fit.

Not long after, I met Huy, the Head of the Robotics branch in MLDA. I explained my interest and experience in AI in general. In the end, I joined him to join the [ICRA BARN challenge](https://cs.gmu.edu/~xiao/Research/BARN_Challenge/BARN_Challenge25.html). In this competition, we developed an MPC mode-switching algorithm, which led us to win second place! It was a great experience and it was also my first time ever going to an academic conference, which took place in Japan (a country I absolutely love!). [Github](https://github.com/MLDA-NTU/mlda-barn-2024)

<figure style="text-align: center;">
  <img src="../images/jackal-robot.jpg" style="width: 50%;" alt="ICRA BARN Challenge">
  <figcaption>Figure 3: Winning second place in ICRA BARN Challenge</figcaption>
</figure>

Surprisingly, the competition aligned closely with my internship project, as both involved using the **Jackal** robot. However, my internship challenge was to develop and adapt **Diffusion Planners** for the robot to navigate in dynamic environments. This was an entirely new area for me, requiring me to read multiple papers, adapt research ideas, and engineer solutions to test on the robot. The experience was a perfect balance of research (50%) and engineering (50%), and I thoroughly enjoyed the process of bringing theoretical concepts to real-world applications.

### 5. Temasek Lab Internship (Present) - Interpretability of ViT models

This brings us to my current internship at Temasek Lab, where I am working on the interpretability of ViT models. From this internship, I have learned a lot about the latest research in ViT models and the importance of interpretability in the field.

## Conclusion 

What a journey all this has been! As I am writing this, I realized that I have been through quite a lot in the past 3 years, and I can feel the growth in my skills and knowledge. I also realized that there are many "luck" involved in my journey, where a lot things seem to fall into place. To me, I am sure this is all part of God's plan for me, and I am grateful for the opportunities and experiences I have been given.

Still, this is just the beginning and I have a long way to go. I will continue to share my journey and learnings in this blog, and I hope you will find it useful!

# Careers
AI research is no longer confined to academia, opportunities now span across universities, big tech labs, and startups. Each path comes with its own trade-offs, depending on your goals, whether it's pushing theory, scaling innovation, or shipping impactful systems fast.

## Academia
AI researchers in academia typically focus on foundational research and advancing the theoretical and mathematical understanding of machine learning, neural networks, and related domains. They often work at universities or research institutes, publishing papers, mentoring students, and teaching courses. However, these days, academia can feel similar to industry, where the work is often empirical, less-theoretical and applied. Usually this track is for people aiming to be professors in universities.

## Big Tech Industry
Recently, research in AI is at a unique spot, where the demand for AI researchers in the tech industry is also high, due to the rapid advancements in the field and massive investments in AI. However, the work is often geared towards applied research and development, fine tuning models towards specialized use cases and making sure the models are performant, aligned and optimized for deploying in production.

## Deep Tech Startups
The rise of LLMs and multimodal models has opened the door for a new wave of AI-native startups, building everything from intelligent human assistants to autonomous agents. This space moves fast and demands versatility: as a researcher, you're not just designing models, you're helping ship them. Some researchers also venture into building their own startups, which is a great way to apply their research to real-world problems and make a big impact.

# Subfields of AI

## Foundations
These are the the foundations of AI, all of which are the most important topics to learn for beginners in AI. An AI researcher should be comfortable with these topics before diving into research on more specialized and recent fields.

### Traditional ML
Machine learning models that use statistical methods to learn patterns from data. Even though the field is now dominated by deep learning models, traditional ML is still a good starting point for beginners in AI, and is still used in many real-world applications.
List of topics to start learning:
- Linear Regression
- Logistic Regression
- Decision Trees
- Random Forest
- Gradient Boosting
- Support Vector Machines

### Neural Networks
Neural networks are a type of machine learning model that use artificial neural networks to learn patterns from data. This is the crux of all the recent breakthroughs in the field, and you must master this before diving into the next deep learning topic.
- Classification
- Regression
- Perceptron
- Multi-Layer Perceptron (MLP)
- Backpropagation
- Activation Functions
- Loss Functions
- Regularization

<figure style="text-align: center;">
  <img src="../images/neural_net.png" style="width: 50%;" alt="Neural Network">
  <figcaption>Figure 4: A simple neural network</figcaption>
</figure>

### Time Series
Analysis and prediction of sequential data points indexed by time. Powers forecasting, anomaly detection, and pattern recognition in financial markets, weather, and IoT systems.
List of topics to start learning:
- Autoregressive Integrated Moving Average (ARIMA)
- Recurrent Neural Networks (RNNs)
- Long Short-Term Memory (LSTMs)
- Gated Recurrent Units (GRUs)

### Computer Vision
Systems that interpret and understand visual information from images or videos. Powers facial recognition, object detection, and image segmentation.
List of topics to start learning:
- Image Classification
- Object Detection
- Semantic Segmentation
- Convolutional Neural Networks (CNNs)
- Residual Networks (ResNet)
- You Only Look Once (YOLO)
- Unet
- Visual Transformers (ViTs)

### Natural Language Processing
Enables machines to understand, interpret, and generate human language. Drives chatbots, translation services, and sentiment analysis.
List of topics to start learning:
- Text Classification
- Question Answering
- Language Translation
- LSTM for Language Modeling
- Transformers
- Bidirectional Encoder Representations from Transformers (BERT)
- Generative Pre-trained Transformer (GPT)

### Reinforcement Learning
Training agents to make decisions by rewarding desired behaviors. Used in robotics, game AI, and autonomous systems.
List of models to start learning:
- Markov Decision Processes (MDPs)
- Agent-Environment Interaction
- Q-learning
- Deep Q Network (DQN)
- Actor-Critic (A2C, A3C)
- Proximal Policy Optimization (PPO)
- Monte Carlo Tree Search (MCTS)

### Unsupervised and Self-Supervised Learning
Self-supervised learning is a type of unsupervised learning where the model learns to predict some aspect of the input data.
List of topics to start learning:
- Clustering and Dimensionality Reduction
- Contrastive Learning
- Autoencoders
- Generative Adversarial Networks (GANs)
- Variational Autoencoders (VAEs)

## Generative AI
These are the most recent fields in AI, all of which were from the 2017 onwards. It is mainly driven by the development of [Transformer models](https://arxiv.org/abs/1706.03762) and [Diffusion models](https://arxiv.org/abs/2006.11239).

### Large Language Models
Neural networks trained on vast text datasets to understand and generate human-like text. Examples include GPT-4, Claude, and Llama.

### Diffusion Models
Generate high-quality images by gradually transforming noise into coherent content. Power popular image generators like DALL-E and Stable Diffusion.

### Multimodal Models
AI systems that process and combine multiple types of data (text, images, audio). Can generate and understand across different modalities.

### Agentic AI and Systems
AI systems that act autonomously to achieve goals, combining reasoning, planning, and execution capabilities.

## More Niche Fields in AI
These are the fields that are more niche and less mainstream, but are still important and interesting. Obviously I can't cover all of them, but I hope this gives you a good starting point and a sense of the diversity of AI. In my opinion, these are the fields that new researchers are more likely to be able to contribute significantly to.

List of topics:
- AI Safety and Alignment
- 3D modelling
- Computer Graphics
- Graph Based AI and Knowledge Graphs
- Embodied AI
- Multi-Agent Systems
- Audio and Speech
- Human-AI Interaction
- Distributed AI and Federated Learning
- Representation Learning
- Neuroscience and Brain-Inspired AI
- Edge and Efficient AI
- Symbolic Reasoning AI
- Thereotical AI / Math of Deep Learning
- AI for Science
- AI for Security
- AI for Healthcare

# Learning Resources

## Fundamental Courses (Good Theory and Math)
These courses are highly recommended for beginners in AI, as they provide a solid foundation in the mathematical and theoretical aspects of the field. They serve as an excellent starting point for AI enthusiasts and typically include a capstone project, allowing learners to apply their knowledge in a practical setting. While beneficial for AI engineers, mastering these concepts is essential for aspiring AI researchers.

- [Deep Learning Specialization](https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning) is a good starting point for beginners in Deep Learning.
- [Machine Learning Specialization](https://www.coursera.org/learn/machine-learning?specialization=machine-learning) is a good to know the more traditional ML concepts.
- [RL Specialization](https://www.coursera.org/specializations/reinforcement-learning) is an amazing course for beginners in Reinforcement Learning.
- [Mathematics for Machine Learning](https://www.coursera.org/specializations/mathematics-for-machine-learning-and-data-science) is a good course if you are not comfortable with the math or want to refresh your knowledge. Calculus, Linear Algebra, and Probability are used all the time in AI research. 
- All the other courses offered by [DeepLearning.ai](https://www.deeplearning.ai/courses/) are also great, and I highly recommend them!
- [LLM Agents](https://llmagents-learning.org/sp25) quite a recent one touching on agentic AI systems. In general, it is useful to learn latest trends in AI.


## Practical Courses (Good for Applying AI to Real-World Problems)

These are the courses that are more practical and applied, and are a good starting point for beginners in AI. 
- [Worldquant Applied Data Science Lab](https://www.wqu.edu/adsl?utm_term=worldquant%20university%20data%20science&utm_campaign=GA_Brand_SEA_Africa%2BAsia_WW&utm_source=adwords&utm_medium=ppc&hsa_acc=1450481729&hsa_cam=21978146302&hsa_grp=171109972549&hsa_ad=723883723654&hsa_src=g&hsa_tgt=kwd-874815672211&hsa_kw=worldquant%20university%20data%20science&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw47i_BhBTEiwAaJfPphoDw2DoKPRHHzUR0vtroIr5iilRr6oYIg9R65EkrgOT6FZjRFOyIRoCwjgQAvD_BwE) perfect for those more into the Data Science part, learning all the necessary libraries and common techniques.
- [Huggingface Courses](https://huggingface.co/learn) is a good course for beginners. The NLP and Computer Vision courses are especially recommended!
- [Kaggle Courses](https://www.kaggle.com/learn) is a good course for beginners. The courses are project based and integrate well with the Kaggle platform and datasets.
- [Fast.ai](https://course.fast.ai/) is a good course for beginners. The courses are project based and integrate well with the Fast.ai platform and datasets.

## More Resources

After you have a good foundation in the fundamental courses, you can and should explore more about the latest research in AI. Be comfortable with diving into papers and the latest research. Also, not all papers are math heavy, so do not be afraid to read them! Here are some resources that I recommend:
- [Paper with Code](https://paperswithcode.com/) is a great resource to find the latest research in AI.
- [Huggingface Daily Papers](https://huggingface.co/papers) is a great resource to find the latest research in NLP and Computer Vision.
- [NeurIPS](https://neurips.cc/virtual/2024/events/workshop) go to NeurIPS or any of top AI conferences and watch their presentation. They provide the slides and videos of the presentations online for free after the conference!

## Websites on AI Challenges and Competitions
A good way to practice your skills and apply your knowledge to real-world problems is to participate in AI challenges and competitions. Here are some of the ones I recommend to start with:
- [Kaggle Competitions](https://www.kaggle.com/competitions): A website that lists out many AI challenges and competitions. I would recommend starting with the Kaggle Playground, which is a great way to understand the basics of ML.
- [AI Crowd](https://aicrowd.com/challenges): A website that lists out many AI challenges and competitions. These are usually more niche and fundamental AI research, but still a good way to learn and apply your knowledge.
- [ML Contest](https://mlcontest.com/): A website that lists out many upcoming and ongoing AI challenges and competitions.

## Communities and Forums
There are many communities and forums that you can join to learn and talk with others about AI. Here are some of the ones I recommend to start with:
- [Huggingface Discord](https://discord.com/invite/hugging-face-879548962464493619)
- [Kaggle Discord](https://discord.com/invite/kaggle)

# Tips and FAQ

## Is ML Research for Me?
If you are often unsure abut pursuing ML, don't worry, you are not alone. I was also unsure about it when I first started. However, I think the best way to find out is to just try it. I can't give a hard yes or no, I think it depends on you and your personal fit.
Personally, as a student trying to pursue ML research in NTU, there are good things I am fortunate enough to experience but also many challenges along the way. There are several things that I can share about my experience.

**General pros about doing ML research:**
- It is an exciting field to do research! If you love math and coding, you will have a lot of time doing both!
- You will be able to solve difficult real-world problems with intelligence. This was unprecedented in history, and it is an amazing feeling to be part of it.
- You will be able to make a big impact. AI is the single most transformative technology of our era, so you have the potential to make a big impact.
- More and more companies and startups are investing in AI, so there will be more opportunities to work in the industry.

**Some of the pros of doing ML research in NTU:**  
- There are dedicated programs for doing research like URECA. Though, you might need to research on the good professors to join; I heard many bad experiences from my friends, but some turns out to be a good starting point. Once you find a good fit, it is a great opportunity.
- NTU offers quite a few research opportunities, and one of its biggest strengths is the strong collaboration between professors and industry. This opens up a lot of great chances to work in research labs that bridge academia and real-world applications. I myself have been able to work in a research lab like Continental and Temasek Lab.
- Honestly, AI/ML courses in NTU are quite slow-paced compared to the rapid progress of the field. But that's actually a good thing. No university course will ever keep up with state-of-the-art advancements, so the best approach is to self-learn and explore on your own. Once you do that, you'll find the lessons much easier and can focus more on research rather than just coursework. Comparatively, compared to NUS, there are much more free time and you need to think less about competition, to explore and do your own research.

**General cons about doing ML research:**
- It is a very competitive field and there are tons of people doing it already. Makes sense since it is a very lucrative field, but if your goal is academia, it might be difficult to stand out. If possible find a niche that is more neglected and focus on it.
- It is a very fast paced field, so you need to be prepared to learn and adapt quickly. If your research is too slow, you might not be able to keep up with the latest research.
- It can be very discouraging at times, especially if you are not getting good results.
- There will be more job opportunities in the industry, and most AI jobs now are probably more about applying LLM APIs, software engineering, data engineering, and only a few has to do with current state-of-the-art research, so it might be difficult to find a good fit in Singapore.

***Some of the cons of doing ML research in NTU:**
- Probably there are not many people interested in ML research as an undergraduate in NTU, so it is quite lonely at times. I'm personally only aware of a handful of students (<10) who are interested in ML research in NTU.
- Sometimes the research culture in NTU might be rough too. Sure there are many professors with a lot of citations, but often times, mentorship is not prioritized. This is understandable considering professors are busy with their own research and PhD students but it can be very discouraging at times. Mine is so-so, but at least I get to stay in touch with the PhDs. I know some of my friends have it worse. Also language barrier is a thing. Not discriminating anyone, but fact of the matter is 90% of the researchers here are Chinese-speaking (In fact I was the only non-Chinese speaker in my team during URECA), so it will be difficult if you are not comfortable with Chinese.
- Not much encouragement and short term incentive in general. Especially if you are going the academia route, the pay would probably not be great at all, and you might have a hard time standing out. (And most of the work you will do will be unpaid, and sometimes not even a good result will come out of the research)

So, is ML research for you? I think it greatly depends on you and your personal fit. If you are not sure, just try doing a research project over the summer or throughout the semester! You will learn a lot more about your fit from there.

## ML Researcher vs ML Engineer

Some might wonder what the difference between ML researcher and ML engineer is. Actually I feel that these days, the lines between the two are blurring. Most of the skills are quite transferable, and indeed most ML researchers are also expected to be able to implement their ideas quickly and correctly. However, I think the key differences are:
- The focus of the work: ML engineers don't need to come up with new models or algorithms. Instead, they focus on quickly iterating and/or implementing existing models, then testing it before deploying it into production.
- The time scale: ML researchers usually have a longer time scale for working on just 1 or 2 difficult problem at a time, while ML engineers usually have a shorter time scale, and I heard that it is likely that ML engineers have to work or maintain multiple projects at once.
- The work culture: ML researchers usually have more freedom to explore and innovate, while ML engineers usually have to follow strict guidelines and standards. "Don't reinvent the wheel" is a common saying in the industry.
- The reward: As a researcher, the reward you will get is the excitement of discovering something new and the satisfaction of solving a difficult problem. As an engineer, the reward you will get is the satisfaction of building something that is used by many people and the money you will get. Generally speaking, I would recommend not to go to ML research only for the money, while not thinking of personal fit. Sure, some big tech companies like Google or Meta will pay PhD ML researchers tons of money, but unless you are one of the top 1% researchers of the world, it is unlikely to get that much, and more often than not, ML engineers can get paid more.

## For Technical Interview

I have been through some technical interviews, and most of the time, as long as you have a good foundation in ML/AI, you should be fine. I have some additional tips that I think are useful for those who are preparing for technical interviews:
- Practice Leetcode and other coding platforms - Surprisingly, this is still used even for ML research roles, so it is still important to be comfortable with it. But I do not recommend spending too much time on it, as it is not the main focus of AI research. Sometimes, you also need to implement ML algorithms from scratch, so it is good to be comfortable with it. 
- Review Math, Statistics and Probability - This is the heart of AI, so it is important to be comfortable with it. You probably won't be asked to calculate probabilities or statistical values, but understanding the concepts is crucial.
- Review basics of ML and AI - This is a must, as it is the foundation of AI research. You should not only memorize algorithms and techniques, but also understand the concepts and the why behind it. (Example: Why do we need to normalize the data? Why do we need to add L2 regularization? Why MSE loss is used?)
- Prepare to share your projects as past experiences - In almost every interview of mine, I was asked to share my projects or past experiences and explain the details. If you don't have one, try to create one, it does not have to be super innovate or new, but try to avoid copying from others. The first time I got an internship, I was asked about my personal [Mario RL](https://github.com/JvThunder/mario-rl) and that really impressed them. It is important to be able to talk about your projects and share your learnings. Make it clear on what you have done and what you have learned. Make sure you don't look like you are only *vibe coding* and not able to explain your project at all, and try to review the details of the project.

## Other General Tips

Some general tips that I think are useful:
- Try to join a research group or lab: This is a great way to learn and get exposure to the latest research in AI. This is also a place to see whether you would enjoy the research and the work culture.
- Try implementing the famous (highly cited) papers: Sometimes you might read and assume you understand the paper, but when you try to implement it, you will realize you have a lot of things to learn. This is a great way to understand the paper better and apply your knowledge to real-world problems. This is also a good way to prepare for your own research.
- Join a hackathon: This is a great way to apply your knowledge to real-world problems and get exposure to the latest research in AI. However, I personally do not recommend joining too much of these, especially since most hackathons are half-baked ideas and implementations and not aligned with research where you need to spend time on the research.
- Just start: Whatever you want to try, just try it. I personally believe that the best way to learn is to just do it. You will learn a lot by just doing it. Don't be intimidated by the math or the complexity of the problem. If you wait to exhaustively learn all the prerequisites of current AI research, you will never start.
- Learn to not get intimidated by the math: I know it is scary, but it is not as scary as you think. Learning to understand the intuition behind it and why it is used.
- Be a Jack of All Trades, Master of One: This might be more of a personal opinion and might be controversial depending on the person. However, I think it is important to be able to understand the big picture of the field and Computer Science in general. A lot of skills and concepts are also quite transferable and even most breakthroughs in AI are built upon random borrowed ideas from other fields. In general, it is also good to have skills in software engineering (web dev / mobile dev, etc.), SQL and database systems, classical algorithms, distributed systems, and more. Soft skills like collaboration, communication, writing, and presentation, team management are also important, so do not neglect them! These are also good for career pivots when you decide research is not for you.

Some of my personal opinions on the don'ts in ML research:
- Do not do technical ML research if you are struggling with either math or coding. You need to at least be above average in both to be able to do well in ML research. This might sound discouraging, but I think it is important to be honest with yourself and not to waste your time. Truth is there will be so many other people who are good at both, and are also willing to work hard. It is going to be very difficult to catch up to that. I am sure there will be many other ways you can do to make big impact, with a better fit for your skills and interestss.
- Don't be afraid to try an idea and failing. This is a common thing in research. You will fail a lot, and that is okay. It is part of the process.
- Don't be afraid to ask for help or advice. This will bring you a long way. If possible connect with more experienced people in the field and listen to their advice. Sometimes these connections will also bring you opportunities in the future!
- Don't be too hasty to try to do too many researches/activities at once. This is coming from personal experience. I think if I were to repeat, I would try to be more focused and do fewer things at once, with more time and such better output quality.
- Don't hold back on not starting just because that you feel you can will do it later. I think if I were to repeat, I would try to be more proactive and not wait for the "right time" to start.
- Don't burn out and spend all your time stuck on a problem. Find time to rest and refresh your mind. It is usually difficult to continue to be productive if you are too tired.

I think that's all I can share for now. I hope you find this blog useful! Thank you for reading!