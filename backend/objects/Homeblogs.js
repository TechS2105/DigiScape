const date = new Date();
const currentDate = date.toLocaleDateString({

    day: '2-digit',
    month: 'short',
    year: 'numeric'

});

const Homeblogs = [

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
            subTitleInner_FirstTitle: 'Start with Google Business Profile',
            subTitleInner_FirstTitle_Intro: 'Your Google Business Profile (GBP) is one of the most powerful tools for local visibility. It’s free and helps customers find you on Google Search and Google Maps.',
            subTitleInner_FirstTitle_SubPoint_Title: 'What to do:',
            subTitleInner_FirstTitle_SubPoint_FirstPoint: 'Add complete business details',
            subTitleInner_FirstTitle_SubPoint_SecondPoint: 'Upload quality photos of your shop, services and team',
            subTitleInner_FirstTitle_SubPoint_ThirdPoint: 'Respond to customer reviews',
            subTitleInner_FirstTitle_SubPoint_FourthPoint: 'Post updates, offers and announcements',
            subTitleInner_FirstTitle_SubPoint_FifthPoint: 'Keep your hours, address and contact info accurate',
            subTitleInner_FirstTitle_SubPoint_ImportentNote: 'A well-optimized GBP boosts your chance of appearing in the Local 3-Pack, which gets the highest clicks in local searches.',

            /** Focus On Local SEO */
            subTitleInner_SecondTitle: 'Focus on Local SEO',
            subTitleInner_SecondTitle_Intro: 'Local SEO helps you rank higher when people search terms like “best bakery near me” or “digital marketing agency in Kolkata.”',
            subTitleInner_SecondTitle_Subpoint_Title: 'Key steps:',
            subTitleInner_SecondTitle_SubPoint_FirstPoint: 'Add location-based keywords naturally across your site',
            subTitleInner_SecondTitle_SubPoint_SecondPoint: 'Create service pages for each location you serve',
            subTitleInner_SecondTitle_SubPoint_ThirdPoint: 'Add your business to trusted local directories',
            subTitleInner_SecondTitle_SubPoint_FourthPoint: 'Build backlinks from local blogs, newspapers, or partners',
            subTitleInner_SecondTitle_SubPoint_ImportentNote: 'Good local SEO brings long-term, organic traffic that converts well.',

            /** Create Useful and Localized Content */
            subTitleInner_ThirdTitle: 'Create Useful and Localized Content',
            subTitleInner_ThirdTitle_Intro: 'People trust businesses that educate, guide and provide value.',
            subTitleInner_ThirdTitle_Subpoint_Title: 'Content ideas for local businesses:',
            subTitleInner_ThirdTitle_SubPoint_FirstPoint: 'How-to guides related to your service',
            subTitleInner_ThirdTitle_SubPoint_SecondPoint: 'Local case studies',
            subTitleInner_ThirdTitle_SubPoint_ThirdPoint: 'Customer success stories',
            subTitleInner_ThirdTitle_SubPoint_FourthPoint: 'Blog posts about local trends',
            subTitleInner_ThirdTitle_SubPoint_FifthPoint: 'Short videos showing behind-the-scenes work',
            subTitleInner_ThirdTitle_SubPoint_ImportentNote: 'This kind of content builds credibility and keeps customers engaged.',

            /** Run Affordable Local Ads */
            subTitleInner_FourthTitle: 'Run Affordable Local Ads',
            subTitleInner_FourthTitle_Intro: 'Even a small budget can work if you target the right people.',
            subTitleInner_FourthTitle_SubPoint_Title: 'Best ad options for local growth:',
            subTitleInner_FourthTitle_SubPoint_FirstPoint: 'Google Search Ads for high-intent customers',
            subTitleInner_FourthTitle_SubPoint_SecondPoint: 'Facebook and Instagram ads for local targeting',
            subTitleInner_FourthTitle_SubPoint_ThirdPoint: 'YouTube ads for building awareness',
            subTitleInner_FourthTitle_SubPoint_ImportentNote: 'These ads let you target people based on location, intent and interests, so you only reach those who actually matter.',

            /** Build Trust with Online Reviews */
            subTitleInner_FifthTitle: 'Build Trust with Online Reviews',
            subTitleInner_FifthTitle_Intro: 'Most people check reviews before deciding. Strong reviews build confidence and push customers to choose you over competitors.',
            subTitleInner_FifthTitle_SubPoint_Title: 'How to grow your reviews naturally:',
            subTitleInner_FifthTitle_SubPoint_FirstPoint: 'Request reviews after each service',
            subTitleInner_FifthTitle_SubPoint_SecondPoint: 'Share review links on WhatsApp or SMS',
            subTitleInner_FifthTitle_SubPoint_ThirdPoint: 'Reply to every review politely',
            subTitleInner_FifthTitle_Subpoint_FourthPoint: 'Highlight top reviews on your website and socials',
            subTitleInner_FifthTitle_SubPoint_ImportentNote: 'Social proof is a key growth factor for local brands.',

            /** Use WhatsApp Marketing for Faster Conversions */
            subTitleInner_SixthTitle: 'Use WhatsApp Marketing for Faster Conversions',
            subTitleInner_SixthTitle_Intro: 'WhatsApp is one of the strongest communication channels for local businesses in India.',
            subTitleInner_SixthTitle_SubPoint_Title: 'How to use it:',
            subTitleInner_SixthTitle_SubPoint_FirstPoint: 'Create a simple catalogue',
            subTitleInner_SixthTitle_SubPoint_SecondPoint: 'Send promotions to your customer list',
            subTitleInner_SixthTitle_SubPoint_ThirdPoint: 'Offer quick support',
            subTitleInner_SixthTitle_SubPoint_FourthPoint: 'Take orders and confirm bookings',
            subTitleInner_SixthTitle_SubPoint_ImportentNote: 'Customers respond faster on WhatsApp than email or calls.',

            /** Track What’s Working */
            subTitleInner_SeventhTitle: 'Track What’s Working',
            subTitleInner_SeventhTitle_Intro: 'Digital marketing becomes powerful when you measure your results.',
            subTitleInner_SeventhTitle_SubPoint_Title: 'Use simple tools like:',
            subTitleInner_SeventhTitle_SubPoint_FirstPoint: 'Google Analytics',
            subTitleInner_SeventhTitle_SubPoint_SecondPoint: 'Google Search Console',
            subTitleInner_SeventhTitle_SubPoint_ThirdPoint: 'GBP Insights',
            subTitleInner_SeventhTitle_SubPoint_FourthPoint: 'Meta Ads Manager',
            subTitleInner_SeventhTitle_SubPoint_ImportentNote: 'Check which strategies bring the most traffic and leads, then double down on them.',

            /** Conclusion */
            conclusion_Title: 'Conclusion',
            first_Conclusion_Details: 'Local businesses can grow much faster when they follow a practical digital marketing approach instead of trying everything at once. With the right mix of Google Business optimization, local SEO, useful content, targeted ads and strong customer engagement, you can build steady growth without large investments.',
            second_Conclusion_Details: 'Start small, stay consistent and focus on delivering value. That’s the formula that helps local businesses scale in today’s digital world.',

        }

    },

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
            firstPoint: 'Books a service',
            secondPoint: 'Clicks to call',
            thirdPoint: 'Submits a form',
            fifthPoint: 'Signs up for something',
            sixthPoint: 'Initiates a WhatsApp chat',

            /** A Clear and Simple Value Proposition */
            subTitleInner_FirstTitle: 'A Clear and Simple Value Proposition',
            subTitleInner_FirstTitle_Intro: 'When someone lands on your website, they should instantly understand what you offer and why it matters. If visitors have to guess, they leave.',
            subTitleInner_FirstTitle_SubPoint_Title: 'How to improve your value message:',
            subTitleInner_FirstTitle_SubPoint_FirstPoint: 'Use a short headline that explains the main benefit',
            subTitleInner_FirstTitle_SubPoint_SecondPoint: 'Add a brief sub-headline for clarity',
            subTitleInner_FirstTitle_SubPoint_ThirdPoint: 'Avoid jargon and confusing phrases',
            subTitleInner_FirstTitle_SubPoint_FourthPoint: 'Focus on how you solve your customer’s problem',
            subTitleInner_FirstTitle_SubPoint_ImportentNote: 'A strong value proposition sets the tone and keeps visitors interested.',

            /** Clean and User-Friendly Design */


        }

    }

];

export default Homeblogs;