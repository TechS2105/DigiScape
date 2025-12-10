const date = new Date();
const currentDate = date.toLocaleDateString({

    day: '2-digit',
    month: 'short',
    year: 'numeric'

});

const Homeblogs = [

    // First Blog
    {

        id: 1,
        category: 'Business Development',
        tag: 'Latest Post',
        frontBlogDetails: {

            image: '/images/Blog Images/first_blog_image.png',
            altText: 'How Local Businesses Grow Faster with Practical Digital Marketing',
            title: 'How Local Businesses Grow Faster with Practical Digital Marketing',
            description: 'Local businesses often struggle to reach consistent customers. This blog explains how simple digital marketing steps help small brands improve visibility, build trust, and convert more people without huge budgets.',
            buttonText: 'Read More'

        },
        fullBlogDetails: {

            image: '/images/Blog Images/first_blog_image.png',
            altText: 'How Local Businesses Grow Faster with Practical Digital Marketing',
            currentDate: { currentDate },
            title: 'How Local Businesses Grow Faster with Practical Digital Marketing',
            firstIntroPara: 'Local businesses face a different kind of competition today. Earlier, shops relied on word of mouth, regular customers, and seasonal demand. But modern customers behave differently. They check reviews, browse online, compare quality, and expect quick answers to their questions. Because of this, even small businesses need a clear digital presence to stay relevant.',
            secondIntorPara: 'Digital marketing is not about using every tool available. It’s about choosing the right steps, doing them consistently, and building trust through honest communication. Many business owners feel digital marketing is expensive or complicated. But the reality is simple: even a few basic steps can dramatically increase visibility and lead generation.',
            thirdIntroPara: 'In this complete guide, you’ll see how local businesses can grow step-by-step with practical digital marketing techniques that work in real life.',

            /** Why Digital Marketing Matters */
            subTitle: 'Why Digital Marketing Matters for Local Businesses',
            subtitleIntro: 'Most customers search online before they buy anything. Whether someone is looking for a nearby salon, a reliable electrician, a cafe or a fitness trainer, their first instinct is to check Google. If your business shows up where customers are already looking, you win.',
            subPointTitle: 'Practical digital marketing helps you:',
            firstPoint: 'Get found in local search results',
            secondPoint: 'Attract customers who are ready to buy',
            thirdPoint: 'Build a stronger brand in your area',
            fourthPoint: 'Stay ahead of local competitors',
            fifthPoint: 'Grow consistently without overspending',
            
            /** Start with Google Business Profile */
            pointNo: 1,
            subTitleInner_FirstTitle: 'Start with Google Business Profile',
            subTitleInner_FirstTitle_Intro: 'Your Google Business Profile (GBP) is one of the most powerful tools for local visibility. It’s free and helps customers find you on Google Search and Google Maps.',
            subTitleInner_FirstTitle_SubPoint_Title: 'What to do:',
            subTitleInner_FirstTitle_SubPoint_FirstPoint: 'Add complete business details',
            subTitleInner_FirstTitle_SubPoint_SecondPoint: 'Upload quality photos of your shop, services and team',
            subTitleInner_FirstTitle_SubPoint_ThirdPoint: 'Respond to customer reviews',
            subTitleInner_FirstTitle_SubPoint_FourthPoint: 'Post updates, offers and announcements',
            subTitleInner_FirstTitle_SubPoint_FifthPoint: 'Keep your hours, address and contact info accurate',
            subTitleInner_FirstTitle_SubPoint_ImportantNote: 'A well-optimized GBP boosts your chance of appearing in the Local 3-Pack, which gets the highest clicks in local searches.',

            /** Focus On Local SEO */
            pointNo: 2,
            subTitleInner_SecondTitle: 'Focus on Local SEO',
            subTitleInner_SecondTitle_Intro: 'Local SEO helps you rank higher when people search terms like “best bakery near me” or “digital marketing agency in Kolkata.”',
            subTitleInner_SecondTitle_Subpoint_Title: 'Key steps:',
            subTitleInner_SecondTitle_SubPoint_FirstPoint: 'Add location-based keywords naturally across your site',
            subTitleInner_SecondTitle_SubPoint_SecondPoint: 'Create service pages for each location you serve',
            subTitleInner_SecondTitle_SubPoint_ThirdPoint: 'Add your business to trusted local directories',
            subTitleInner_SecondTitle_SubPoint_FourthPoint: 'Build backlinks from local blogs, newspapers, or partners',
            subTitleInner_SecondTitle_SubPoint_ImportantNote: 'Good local SEO brings long-term, organic traffic that converts well.',

            /** Create Useful and Localized Content */
            pointNo: 3,
            subTitleInner_ThirdTitle: 'Create Useful and Localized Content',
            subTitleInner_ThirdTitle_Intro: 'People trust businesses that educate, guide and provide value.',
            subTitleInner_ThirdTitle_Subpoint_Title: 'Content ideas for local businesses:',
            subTitleInner_ThirdTitle_SubPoint_FirstPoint: 'How-to guides related to your service',
            subTitleInner_ThirdTitle_SubPoint_SecondPoint: 'Local case studies',
            subTitleInner_ThirdTitle_SubPoint_ThirdPoint: 'Customer success stories',
            subTitleInner_ThirdTitle_SubPoint_FourthPoint: 'Blog posts about local trends',
            subTitleInner_ThirdTitle_SubPoint_FifthPoint: 'Short videos showing behind-the-scenes work',
            subTitleInner_ThirdTitle_SubPoint_ImportantNote: 'This kind of content builds credibility and keeps customers engaged.',

            /** Run Affordable Local Ads */
            pointNo: 4,
            subTitleInner_FourthTitle: 'Run Affordable Local Ads',
            subTitleInner_FourthTitle_Intro: 'Even a small budget can work if you target the right people.',
            subTitleInner_FourthTitle_SubPoint_Title: 'Best ad options for local growth:',
            subTitleInner_FourthTitle_SubPoint_FirstPoint: 'Google Search Ads for high-intent customers',
            subTitleInner_FourthTitle_SubPoint_SecondPoint: 'Facebook and Instagram ads for local targeting',
            subTitleInner_FourthTitle_SubPoint_ThirdPoint: 'YouTube ads for building awareness',
            subTitleInner_FourthTitle_SubPoint_ImportantNote: 'These ads let you target people based on location, intent and interests, so you only reach those who actually matter.',

            /** Build Trust with Online Reviews */
            pointNo: 5,
            subTitleInner_FifthTitle: 'Build Trust with Online Reviews',
            subTitleInner_FifthTitle_Intro: 'Most people check reviews before deciding. Strong reviews build confidence and push customers to choose you over competitors.',
            subTitleInner_FifthTitle_SubPoint_Title: 'How to grow your reviews naturally:',
            subTitleInner_FifthTitle_SubPoint_FirstPoint: 'Request reviews after each service',
            subTitleInner_FifthTitle_SubPoint_SecondPoint: 'Share review links on WhatsApp or SMS',
            subTitleInner_FifthTitle_SubPoint_ThirdPoint: 'Reply to every review politely',
            subTitleInner_FifthTitle_Subpoint_FourthPoint: 'Highlight top reviews on your website and socials',
            subTitleInner_FifthTitle_SubPoint_ImportantNote: 'Social proof is a key growth factor for local brands.',

            /** Use WhatsApp Marketing for Faster Conversions */
            pointNo: 6,
            subTitleInner_SixthTitle: 'Use WhatsApp Marketing for Faster Conversions',
            subTitleInner_SixthTitle_Intro: 'WhatsApp is one of the strongest communication channels for local businesses in India.',
            subTitleInner_SixthTitle_SubPoint_Title: 'How to use it:',
            subTitleInner_SixthTitle_SubPoint_FirstPoint: 'Create a simple catalogue',
            subTitleInner_SixthTitle_SubPoint_SecondPoint: 'Send promotions to your customer list',
            subTitleInner_SixthTitle_SubPoint_ThirdPoint: 'Offer quick support',
            subTitleInner_SixthTitle_SubPoint_FourthPoint: 'Take orders and confirm bookings',
            subTitleInner_SixthTitle_SubPoint_ImportantNote: 'Customers respond faster on WhatsApp than email or calls.',

            /** Track What’s Working */
            pointNo: 7,
            subTitleInner_SeventhTitle: 'Track What’s Working',
            subTitleInner_SeventhTitle_Intro: 'Digital marketing becomes powerful when you measure your results.',
            subTitleInner_SeventhTitle_SubPoint_Title: 'Use simple tools like:',
            subTitleInner_SeventhTitle_SubPoint_FirstPoint: 'Google Analytics',
            subTitleInner_SeventhTitle_SubPoint_SecondPoint: 'Google Search Console',
            subTitleInner_SeventhTitle_SubPoint_ThirdPoint: 'GBP Insights',
            subTitleInner_SeventhTitle_SubPoint_FourthPoint: 'Meta Ads Manager',
            subTitleInner_SeventhTitle_SubPoint_ImportantNote: 'Check which strategies bring the most traffic and leads, then double down on them.',

            /** Conclusion */
            conclusion_Title: 'Conclusion',
            first_Conclusion_Details: 'Local businesses can grow much faster when they follow a practical digital marketing approach instead of trying everything at once. With the right mix of Google Business optimization, local SEO, useful content, targeted ads and strong customer engagement, you can build steady growth without large investments.',
            second_Conclusion_Details: 'Start small, stay consistent and focus on delivering value. That’s the formula that helps local businesses scale in today’s digital world.',

        }

    },

    // Second Blog
    {

        id: 2,
        category: '',
        tag: 'Latest Post',
        frontBlogDetails: {

            image: '/images/Blog Images/second_blog_image.png',
            altText: 'What Makes a Website Convert Visitors Into Customers',
            title: 'What Makes a Website Convert Visitors Into Customers',
            description: 'A conversion focused website helps customers understand your service quickly and trust your brand enough to take action. This blog explains how small design improvements create big business results.',
            buttonText: 'Read More'

        },
        fullBlogDetails: {

            image: '/images/Blog Images/second_blog_image(1).png',
            altText: 'What Makes a Website Convert Visitors Into Customers',
            currentDate: { currentDate },
            title: 'What Makes a Website Convert Visitors Into Customers',
            firstIntroPara: 'Many business owners focus on how a website looks, but customers care more about how a website feels and how quickly it answers their needs. A high-converting website doesn’t rely on heavy graphics or complicated animations. Instead, it uses clean design, clear information, and a simple flow that leads visitors naturally toward taking action.',
            secondIntorPara: 'In a world where people decide within a few seconds whether they trust a business, your website becomes your digital handshake. It must make sense instantly. A visitor should be able to recognize what you offer, why you’re different, and how to contact you—all without searching through multiple pages.',
            thirdIntroPara: 'This blog walks through the essential elements that help a website convert more visitors into real inquiries and customers. It includes practical examples, bullet points, and a step-by-step approach you can follow for any business website.',

            /** Why Website Conversion Matters */
            subTitle: 'Why Website Conversion Matters',
            subtitleIntro: 'You can run ads, create content, and attract traffic from different channels, but if your website doesn’t convert, all your efforts will go to waste.',
            subPointTitle: 'Conversion is the moment when a visitor sends an enquiry:',

            // List Items
            subTitle_ListItems: {

                firstPoint: 'Books a service',
                secondPoint: 'Clicks to call',
                thirdPoint: 'Submits a form',
                fifthPoint: 'Signs up for something',
                sixthPoint: 'Initiates a WhatsApp chat'

            },

            /** A Clear and Simple Value Proposition */
            pointNo: 1,
            subTitleInner_FirstTitle: 'A Clear and Simple Value Proposition',
            subTitleInner_FirstTitle_Intro: 'When someone lands on your website, they should instantly understand what you offer and why it matters. If visitors have to guess, they leave.',
            subTitleInner_FirstTitle_SubPoint_Title: 'How to improve your value message:',

            // List Items
            subTitleInner_FirstTitle_ListItems: {

                subTitleInner_FirstTitle_SubPoint_FirstPoint: 'Use a short headline that explains the main benefit',
                subTitleInner_FirstTitle_SubPoint_SecondPoint: 'Add a brief sub-headline for clarity',
                subTitleInner_FirstTitle_SubPoint_ThirdPoint: 'Avoid jargon and confusing phrases',
                subTitleInner_FirstTitle_SubPoint_FourthPoint: 'Focus on how you solve your customer’s problem',
                
            },

            subTitleInner_FirstTitle_SubPoint_ImportantNote: 'A strong value proposition sets the tone and keeps visitors interested.',
            
            /** Clean and User-Friendly Design */
            pointNo: 2,
            subTitleInner_SecondTitle: 'Clean and User-Friendly Design',
            subTitleInner_SecondTitle_Intro: 'People judge websites in seconds. A clean layout builds trust, while a cluttered one creates doubt.',
            subTitleInner_SecondTitle_SubPoint_Title: 'Elements of an effective design:',

            // List Items
            subTitleInner_SecondTitle_ListItems: {

                    subTitleInner_SecondTitle_SubPoint_FirstPoint: 'Easy navigation',
                    subTitleInner_SecondTitle_SubPoint_SecondPoint: 'Plenty of white space',
                    subTitleInner_SecondTitle_SubPoint_ThirdPoint: 'Consistent fonts and colors',
                    subTitleInner_SecondTitle_SubPoint_FourthPoint: 'Clear visual hierarchy',
                    subTitleInner_SecondTitle_SubPoint_FifthPoint: 'Mobile-friendly structure',
                    
            },

            // Important Note
            subTitleInner_SecondTitle_SubPoint_ImportantNote: 'Good design helps users move through your website without effort.',
            
            /** Fast Loading Speed */
            pointNo: 3,
            subTitleInner_ThirdTitle: 'Fast Loading Speed',
            subTitleInner_ThirdTitle_Intro: 'Slow websites lose visitors before they even see your content. Speed is one of the biggest factors in conversion.',
            subTitleInner_ThirdTitle_Subpoint_Title: 'Improve your website speed by:',

            // List Items
            subTitleInner_ThirdTitle_ListItems: {

                subTitleInner_ThirdTitle_SubPoint_FirstPoint: 'Compressing images',
                subTitleInner_ThirdTitle_SubPoint_SecondPoint: 'Using a reliable hosting service',
                subTitleInner_ThirdTitle_SubPoint_ThirdPoint: 'Implementing caching',
                subTitleInner_ThirdTitle_SubPoint_FourthPoint: 'Reducing heavy scripts',
                subTitleInner_ThirdTitle_SubPoint_FifthPoint: 'Using a content delivery network',


            },

            // Important Note
            subTitleInner_ThirdTitle_SubPoint_ImportantNote: 'A fast site keeps users engaged and reduces bounce rates.',

            /** Strong Call-to-Action Buttons */
            pointNo: 4,
            subTitleInner_FourthTitle: 'Strong Call-to-Action Buttons',
            subTitleInner_FourthTitle_Intro: 'Your website must guide visitors to take action. Without clear calls to action, people won’t know what to do next.',
            subTitleInner_FourthTitle_SubPoint_Title: 'Examples of effective CTAs:',

            // List Itmes
            subTitleInner_FourthTitle_ListItems: {

                subTitleInner_FourthTitle_SubPoint_FirstPoint: 'Get a Free Quote',
                subTitleInner_FourthTitle_SubPoint_SecondPoint: 'Book a Demo',
                subTitleInner_FourthTitle_SubPoint_ThirdPoint: 'Start Your Trial',
                subTitleInner_FourthTitle_SubPoint_FourthPoint: 'Contact Us',
                subTitleInner_FourthTitle_SubPoint_FifthPoint: 'Buy Now',


            },

            // Important Note
            subTitleInner_FourthTitle_SubPoint_ImportantNote: 'Place CTAs where they feel natural, not forced. Make them stand out visually and keep the message crisp.',

            /** Trust-Building Elements */
            pointNo: 5,
            subTitleInner_FifthTitle: 'Trust Building Elements',
            subTitleInner_FifthTitle_Intro: 'People buy when they feel safe. Trust signals show that your business is reliable.',
            subTitleInner_FifthTitle_SubPoint_Title: 'Trusted elements include:',

            // List Items
            subTitleInner_FifthTitle_ListItems: {

                subTitleInner_FifthTitle_SubPoint_FirstPoint: 'Customer reviews and testimonials',
                subTitleInner_FifthTitle_SubPoint_SecondPoint: 'Case studies',
                subTitleInner_FifthTitle_SubPoint_ThirdPoint: 'Awards, badges and certifications',
                subTitleInner_FifthTitle_Subpoint_FourthPoint: 'Clear contact information',
                subTitleInner_FifthTitle_Subpoint_FifthPoint: 'Secure checkout and privacy policies',

            },

            // Important Note
            subTitleInner_FifthTitle_SubPoint_ImportantNote: 'Trust elements reduce hesitation and increase confidence.',

            /** High-Quality Content That Answers Questions */
            pointNo: 6,
            subTitleInner_SixthTitle: 'High-Quality Content That Answers Questions',
            subTitleInner_SixthTitle_Intro: 'Visitors should find the information they need quickly. Good content educates, helps and convinces.',
            subTitleInner_SixthTitle_SubPoint_Title: 'What your content should do:',

            // List Items
            subTitleInner_SixthTitle_ListItems: {

                subTitleInner_SixthTitle_SubPoint_FirstPoint: 'Explain your product or service',
                subTitleInner_SixthTitle_SubPoint_SecondPoint: 'Answer common questions',
                subTitleInner_SixthTitle_SubPoint_ThirdPoint: 'Highlight benefits clearly',
                subTitleInner_SixthTitle_SubPoint_FourthPoint: 'Show proof with real examples',
                subTitleInner_SixthTitle_SubPoint_FifthPoint: 'Offer guidance that builds authority',

            },

            // Important Note
            subTitleInner_SixthTitle_SubPoint_ImportantNote: 'When your content removes doubts, conversions rise naturally.',

            /** Mobile Optimisation */
            pointNo: 7,
            subTitleInner_SeventhTitle: 'Mobile Optimisation',
            subTitleInner_SeventhTitle_Intro: 'Most people browse on their phones. If your website is hard to use on mobile, you lose potential customers.',
            subTitleInner_SeventhTitle_SubPoint_Title: 'Make your mobile experience better by:',

            // List Items
            subTitleInner_SeventhTitle_ListItems: {

                subTitleInner_SeventhTitle_SubPoint_FirstPoint: 'Using responsive layouts',
                subTitleInner_SeventhTitle_SubPoint_SecondPoint: 'Keeping buttons large enough to tap',
                subTitleInner_SeventhTitle_SubPoint_ThirdPoint: 'Avoiding long forms',
                subTitleInner_SeventhTitle_SubPoint_FourthPoint: 'Ensuring images scale correctly',

            },

            // Important Note
            subTitleInner_SeventhTitle_SubPoint_ImportantNote: 'Mobile optimisation is no longer optional.',

            // Conclusion 
            conclusion_Details: {

                conclusion_Title: 'Conclusion',
                first_Conclusion_Details: 'A high-converting website isn’t about flashy design. It’s about clarity, speed, trust and experience. When your website removes confusion and guides people naturally toward a decision, conversions rise on their own.',
                second_Conclusion_Details: 'If you focus on a strong message, a clean layout, fast performance and trustworthy content, your visitors are more likely to become loyal customers.'

            }

        }

    },

    // Third Blog
    {

        id: 3,
        category: 'SEO & Organic Growth',
        tag: 'Latest Post',
        frontBlogDetails: {

            image: '/images/Blog Images/third_blog_image.png',
            altText: 'Why SEO Still Drives the Most Reliable Long Term Growth',
            title: 'Why SEO Still Drives the Most Reliable Long-Term Growth',
            description: 'SEO brings steady customers without depending on ads. This blog covers simple SEO techniques that help any business appear higher on Google searches in their local market.',
            buttonText: 'Read More'

        },
        fullBlogDetails: {

            image: '/images/Blog Images/third_blog_image.png',
            altText: 'Why SEO Still Drives the Most Reliable Long-Term Growth',
            currentDate: { currentDate },
            title: 'Why SEO Still Drives the Most Reliable Long-Term Growth',
            firstIntroPara: 'SEO continues to shape how customers discover brands online. This blog explains why search visibility is still one of the most reliable ways to grow, compete, and build trust in a crowded digital market.',
            secondIntorPara: 'Search has become the backbone of digital discovery. Whether someone needs a product, service, or quick recommendation, their first action is to search. That hasn’t changed. What has changed is the way search engines evaluate websites and decide which businesses deserve visibility. Many brands still treat SEO as a secondary task, but the market is too competitive for that mindset. Consistent optimisation is now a strategic advantage that shapes long-term growth.',
            thirdIntroPara: 'This blog walks through the reasons SEO remains so important in 2026. It also explains how businesses can apply practical steps to improve visibility, attract qualified customers, and create a sustainable digital presence.',

            /** Why Search Traffic Has Strong Intent Matters */
            subTitle: 'Search Traffic Has Strong Intent',
            subtitleIntro: 'People who search on Google usually have a clear purpose. They might be comparing products, looking for solutions or ready to make a purchase. This natural intent makes organic search traffic much more valuable than traffic from random social media browsing.',
            subPointTitle: 'Why search traffic has strong intent matters:',

            // List Items
            subTitle_ListItems: {

                firstPoint: 'Visitors are closer to making a decision',
                secondPoint: 'They stay longer and engage more',
                thirdPoint: 'They convert at a higher rate'

            },

            /** SEO Delivers Sustainable Results */
            pointNo: 1,
            subTitleInner_FirstTitle: 'SEO Delivers Sustainable Results',
            subTitleInner_FirstTitle_Intro: 'Paid ads work only as long as you pay. The moment you pause your campaign, your traffic stops. SEO works differently. Once your content ranks well, it continues to bring traffic for months or even years with minimal ongoing cost.',
            subTitleInner_FirstTitle_SubPoint_Title: 'SEO gives you:',

            // List Items
            subTitleInner_FirstTitle_ListItems: {

                subTitleInner_FirstTitle_SubPoint_FirstPoint: 'Consistent visibility',
                subTitleInner_FirstTitle_SubPoint_SecondPoint: 'Evergreen traffic',
                subTitleInner_FirstTitle_SubPoint_ThirdPoint: 'Long-term credibility',
                subTitleInner_FirstTitle_SubPoint_FourthPoint: 'Higher ROI',
                
            },

            // Important Note
            subTitleInner_FirstTitle_SubPoint_ImportantNote: 'It’s a long-term investment that pays off steadily.',
            
            /** SEO Builds Authority and Trust */
            pointNo: 2,
            subTitleInner_SecondTitle: 'SEO Builds Authority and Trust',
            subTitleInner_SecondTitle_Intro: 'Google ranks websites that offer value, expertise and a great user experience. When your site appears consistently at the top of search results, people trust you more.',
            subTitleInner_SecondTitle_SubPoint_Title: 'Signals that boost trust include:',

            // List Items
            subTitleInner_SecondTitle_ListItems: {

                    subTitleInner_SecondTitle_SubPoint_FirstPoint: 'High-quality content',
                    subTitleInner_SecondTitle_SubPoint_SecondPoint: 'Backlinks from reputable sites',
                    subTitleInner_SecondTitle_SubPoint_ThirdPoint: 'Good user experience',
                    subTitleInner_SecondTitle_SubPoint_FourthPoint: 'Strong brand presence',
                    
            },

            // Important Note
            subTitleInner_SecondTitle_SubPoint_ImportantNote: 'Being visible on Google shows credibility before a customer even clicks.',
            
            /** SEO Strengthens Every Other Marketing Channel */
            pointNo: 3,
            subTitleInner_ThirdTitle: 'SEO Strengthens Every Other Marketing Channel',
            subTitleInner_ThirdTitle_Intro: 'SEO doesn’t work alone. It enhances all other marketing efforts.',
            subTitleInner_ThirdTitle_Subpoint_Title: 'How SEO supports your overall marketing:',

            // List Items
            subTitleInner_ThirdTitle_ListItems: {

                subTitleInner_ThirdTitle_SubPoint_FirstPoint: 'Content created for SEO can be reused on social media',
                subTitleInner_ThirdTitle_SubPoint_SecondPoint: 'Keyword insights improve ad targeting',
                subTitleInner_ThirdTitle_SubPoint_ThirdPoint: 'Organic visibility boosts brand recognition',
                subTitleInner_ThirdTitle_SubPoint_FourthPoint: 'Good on-page SEO improves website conversions',

            },

            // Important Note
            subTitleInner_ThirdTitle_SubPoint_ImportantNote: 'It creates a strong foundation for your entire digital presence.',

            /** Local SEO Drives Real Customers */
            pointNo: 4,
            subTitleInner_FourthTitle: 'Local SEO Drives Real Customers',
            subTitleInner_FourthTitle_Intro: 'For local businesses, local SEO is a powerful growth engine. When someone searches “best salon near me” or “electrician in Kolkata,” they are ready to buy or book.',
            subTitleInner_FourthTitle_SubPoint_Title: 'Local SEO helps you:',

            // List Itmes
            subTitleInner_FourthTitle_ListItems: {

                subTitleInner_FourthTitle_SubPoint_FirstPoint: 'Appear in the Google Map Pack',
                subTitleInner_FourthTitle_SubPoint_SecondPoint: 'Build trust with reviews',
                subTitleInner_FourthTitle_SubPoint_ThirdPoint: 'Reach customers who need your services now',

            },

            // Important Note
            subTitleInner_FourthTitle_SubPoint_ImportantNote: 'It directly brings high-intent local leads without high advertising costs.',

            /** SEO Helps You Stay Competitive */
            pointNo: 5,
            subTitleInner_FifthTitle: 'SEO Helps You Stay Competitive',
            subTitleInner_FifthTitle_Intro: 'Your competitors are online. If they invest in SEO and you don’t, they’ll capture most of the organic market share. Ranking higher means more clicks, more leads and more sales.',
            subTitleInner_FifthTitle_SubPoint_Title: 'Reasons to stay competitive with SEO:',

            // List Items
            subTitleInner_FifthTitle_ListItems: {

                subTitleInner_FifthTitle_SubPoint_FirstPoint: 'Search results are winner-takes-most',
                subTitleInner_FifthTitle_SubPoint_SecondPoint: 'High-ranking pages gain exponential visibility',
                subTitleInner_FifthTitle_SubPoint_ThirdPoint: 'Good SEO makes it harder for competitors to outrank you'

            },

            // Important Note
            subTitleInner_FifthTitle_SubPoint_ImportantNote: 'SEO protects your position and keeps you ahead over time.',

            /** SEO Evolves with Consumer Behavior */
            pointNo: 6,
            subTitleInner_SixthTitle: 'SEO Evolves with Consumer Behavior',
            subTitleInner_SixthTitle_Intro: 'Search habits change, but the importance of search does not. People now search through:',
            subTitleInner_SixthTitle_SubPoint_Title: 'How SEO Evolves with Consumer Behavior',

            // List Items
            subTitleInner_SixthTitle_ListItems: {

                subTitleInner_SixthTitle_SubPoint_FirstPoint: 'Mobile phones',
                subTitleInner_SixthTitle_SubPoint_SecondPoint: 'Voice assistants',
                subTitleInner_SixthTitle_SubPoint_ThirdPoint: 'AI-powered search tools',
                subTitleInner_SixthTitle_SubPoint_FourthPoint: 'Local business listings'

            },

            // Important Note
            subTitleInner_SixthTitle_SubPoint_ImportantNote: 'SEO adapts to all these changes. As long as people search online, SEO will remain essential.',

            /** SEO Is Cost-Effective Compared to Ads */
            pointNo: 7,
            subTitleInner_SeventhTitle: 'SEO Is Cost-Effective Compared to Ads',
            subTitleInner_SeventhTitle_Intro: 'SEO requires time, effort and sometimes professional support, but the long-term cost is far lower than running ads forever.',
            subTitleInner_SeventhTitle_SubPoint_Title: 'Why SEO saves money long term:',

            // List Items
            subTitleInner_SeventhTitle_ListItems: {

                subTitleInner_SeventhTitle_SubPoint_FirstPoint: 'Lower cost per acquisition',
                subTitleInner_SeventhTitle_SubPoint_SecondPoint: 'Evergreen traffic',
                subTitleInner_SeventhTitle_SubPoint_ThirdPoint: 'Reduced dependency on ads',
                subTitleInner_SeventhTitle_SubPoint_FourthPoint: 'Compounding returns'

            },

            // Important Note
            subTitleInner_SeventhTitle_SubPoint_ImportantNote: 'Every optimized page becomes an asset that keeps generating results.',

            // Conclusion 
            conclusion_Details: {

                conclusion_Title: 'Conclusion',
                first_Conclusion_Details: 'SEO remains the most reliable long-term growth strategy because it focuses on visibility, intent and trust. It doesn’t rely on trends or paid budgets. It builds a stable foundation that supports your brand for years.',
                second_Conclusion_Details: 'Businesses that invest in SEO see lasting results, stronger brand authority and a steady stream of high-quality customers. While other tactics rise and fade, SEO stays consistent, predictable and proven.'

            }

        }

    },

    // Fourth Blog
    

];

export default Homeblogs;