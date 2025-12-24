import { useState } from "react";

const Beauty_FAQs = () => {
  const [open, setOpen] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "Demand for cosmetics has increased",
      answer: "The global market for cosmetics is expected to rise exponentially in the next 10 years. The demand for cosmetics online has shot up as beauty products can dramatically improve an individual's overall appearance. In the last decade, cosmetic products have evolved from being a luxury good into an absolute need in modern life. Large multinational companies are focussed on catering to the individual requirements of men and women by offering comprehensive product lines, such as face care, hair care, and body care. In addition, there has been an increasing number of launches of anti-ageing products, while innovative and convenient packaging designs, and on-the-go products in compact containers are becoming very popular. Every individual has a unique combination of hair texture, skin tone, eye colour, and lip shape. As a result, manufacturers are concentrating their efforts on the development and diversification of their product portfolios to meet the special requirements of each individual."
    },
    {
      id: 2,
      question: "Importance of personal grooming products",
      answer: "After the pandemic scare, concerns over one's body and well-being are growing due to schedule changes, as well as better eating habits and sleep cycles. Men and women want to appear healthier and more attractive with the use of beauty care products. Consequently, this has led to a growing demand for cosmetic products from younger and aged people. Increasing awareness about the importance of health and personal grooming is fuelling increased demand for sustainable cosmetics, which in turn is driving market expansion."
    },
    {
      id: 3,
      question: "Expanded awareness about sustainable products",
      answer: "On a worldwide scale, beauty products manufactured using ingredients produced from natural sources are more popular since they are safe to use. As people become more conscious of environmental issues, there is more demand for items that are safe for the environment as well. The increased demand for eco-friendly cosmetics and sustainable upcycled packaging can be linked to increased consumer knowledge regarding the potentially harmful impact that man-made chemicals have on both human health and the natural environment."
    },
    {
      id: 4,
      question: "New interest in clean beauty products",
      answer: ["The worldwide clean beauty industry is expected to double in the next 5 years. In the past few years, consumers have spent more time on skincare than cosmetics, resulting in a better understanding of product ingredients. Clean beauty signifies that the product is non-toxic, and the listed ingredients are cruelty-free. Consumers are paying close attention to cruelty-free cosmetic products, resulting in a robust demand for clean beauty products. As long as synthetic or laboratory-created components are safe, there will be a consistent long-term demand from clean beauty consumers.",
                "Before the pandemic, buyers were more interested in buying beauty products online that make them look seductive. After the pandemic, people are more interested in clean beauty products with environment-friendly packaging that are also aesthetically appealing. Moreover, consumers want beauty products that enhance their well-being, their mood, and desirability. Also, since last year, experts have noted new interest in fragrance and ",
                ,
                "." ,
                "Since 2022, market experts have observed that consumers have developed an appetite for health and well-being. Also, people choose to buy specialised hair care products from stores and buy cosmetics online as well. Consumers who invest more in the premium hair care products are focused on sophisticating their premium hair care routines. Additionally, consumer habits are focusing on skin care, cosmetic products, hair colour products, where people seek innovation in cosmetics, not just utility."
      ]
    },
    {
      id: 2,
      question: "Importance of personal grooming products",
      answer: ""
    }
  ];

  return (
    <div className="w-full px-6 mt-6">

      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex justify-between items-center py-5 border-b border-gray-300"
      >
        <span className="text-lg font-semibold text-gray-700">
          Beauty Makeup
        </span>

       
        <svg
          className={`w-6 h-6 text-teal-600 transition-transform duration-300
            ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

     
      {open && (
        <h2 className="text-center text-teal-600 text-xl font-bold mt-6 mb-4">
          Beauty Makeup
        </h2>
      )}

      
      {open && (
        <div className="max-w-4xl mx-auto space-y-6 rounded-xl">
          {faqs.map(item => (
            <div key={item.id}>
              <h3 className="text-[#0f5f59]-600 font-semibold">
                {item.question}
              </h3>
              <p className="mt-2 text-black">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Beauty_FAQs;
