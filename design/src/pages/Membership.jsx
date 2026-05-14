import { useState } from 'react';
import { motion } from 'framer-motion';

const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'BASIC',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Gym Access (6am-10pm)',
        '2 Group Classes/Week',
        'Locker Access',
        'Basic Equipment',
        'Shower Facilities',
      ],
      popular: false,
    },
    {
      name: 'PREMIUM',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Gym Access (5am-12am)',
        'Unlimited Group Classes',
        'Personal Locker',
        'All Equipment Access',
        'Sauna & Steam Room',
        '2 PT Sessions/Month',
        'Nutrition Consultation',
      ],
      popular: true,
    },
    {
      name: 'ELITE',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        '24/7 Gym Access',
        'Unlimited Everything',
        'Private Locker Room',
        'VIP Equipment Zone',
        'Spa & Recovery Suite',
        'Weekly PT Sessions',
        'Custom Meal Plans',
        'Priority Booking',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-black pt-32">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black gradient-text mb-6"
          >
            MEMBERSHIP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Choose the plan that fits your fitness journey
          </motion.p>

          {/* Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center glass rounded-full p-2"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                !isYearly ? 'bg-white text-black' : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                isYearly ? 'bg-white text-black' : 'text-gray-400'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`glass rounded-2xl p-8 relative ${
                  plan.popular ? 'border-2 border-white' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-4xl font-black mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <motion.div
                    key={isYearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl font-black"
                  >
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.div>
                  <p className="text-gray-400 text-sm mt-2">
                    {isYearly ? 'per year' : 'per month'}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-white mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`premium-btn w-full py-4 rounded-full font-bold ${
                    plan.popular
                      ? 'bg-white text-black'
                      : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}
                >
                  SELECT {plan.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">
              COMPARE PLANS
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="pb-4 text-gray-400">Feature</th>
                  <th className="pb-4 text-center">BASIC</th>
                  <th className="pb-4 text-center">PREMIUM</th>
                  <th className="pb-4 text-center">ELITE</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ['Gym Access Hours', '6am-10pm', '5am-12am', '24/7'],
                  ['Group Classes', '2/week', 'Unlimited', 'Unlimited'],
                  ['PT Sessions', '—', '2/month', 'Weekly'],
                  ['Nutrition Plans', '—', 'Basic', 'Custom'],
                  ['Spa Access', '—', '✓', '✓'],
                  ['Priority Support', '—', '—', '✓'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-4 font-medium">{row[0]}</td>
                    <td className="py-4 text-center">{row[1]}</td>
                    <td className="py-4 text-center">{row[2]}</td>
                    <td className="py-4 text-center">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black gradient-text mb-4">FAQ</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, all plans are flexible with no long-term commitment.',
              },
              {
                q: 'Is there a free trial?',
                a: 'We offer a 7-day free trial for all new members.',
              },
              {
                q: 'Can I upgrade my plan?',
                a: 'Absolutely! Upgrade anytime and pay only the difference.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
