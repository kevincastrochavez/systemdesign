const reviewSectionDefault = {
  reviews: [
    {
      name: 'Kevin Castro',
      rating: 5,
      date: new Date(2023, 0, 1),
      text: "I've worn it everywhere, super durable and fashionable.",
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/1.jpg',
        alt: 'Kevin Castro at the Sand Dunes',
      },
    },
    {
      name: 'Sophia Lee',
      rating: 4.5,
      date: new Date(2023, 1, 2),
      text: 'A bit uncomfortable at first, but they broke in nicely.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/2.jpg',
        alt: 'Sophia Lee enjoying a sunset hike',
      },
    },
    {
      name: 'Liam Johnson',
      rating: 5,
      date: new Date(2023, 2, 3),
      text: 'Stylish but not as durable as expected.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/3.jpg',
        alt: 'Liam Johnson at the city park',
      },
    },
    {
      name: 'Olivia Brown',
      rating: 4.5,
      date: new Date(2023, 3, 4),
      text: 'Color faded after a few washes.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/4.jpg',
        alt: 'Olivia Brown at the beach',
      },
    },
    {
      name: 'Noah Davis',
      rating: 5,
      date: new Date(2023, 4, 5),
      text: 'Not bad, but there are better options out there.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/5.jpg',
        alt: 'Noah Davis at the mountain trail',
      },
    },
    {
      name: 'Emma Martinez',
      rating: 4.5,
      date: new Date(2023, 5, 6),
      text: 'Comfortable but a bit overpriced.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/6.jpg',
        alt: 'Emma Martinez at a forest walk',
      },
    },
    {
      name: 'James Wilson',
      rating: 5,
      date: new Date(2023, 6, 7),
      text: 'Solid product, met my expectations.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/7.jpg',
        alt: 'James Wilson at a coffee shop',
      },
    },
    {
      name: 'Mia Anderson',
      rating: 4.5,
      date: new Date(2023, 7, 8),
      text: 'Great quality, very happy with my purchase.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/8.jpg',
        alt: 'Mia Anderson at a city landmark',
      },
    },
    {
      name: 'William Taylor',
      rating: 5,
      date: new Date(2023, 8, 9),
      text: 'Exceeded my expectations, highly recommend!',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/9.jpg',
        alt: 'William Taylor at a sports event',
      },
    },
    {
      name: 'Ava Thomas',
      rating: 1.5,
      date: new Date(2023, 9, 10),
      text: 'Fantastic product, would buy again.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/10.jpg',
        alt: 'Ava Thomas at a cultural festival',
      },
    },
    {
      name: 'Ethan White',
      rating: 5,
      date: new Date(2023, 10, 11),
      text: 'Best purchase I have made in a long time.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/11.jpg',
        alt: 'Ethan White enjoying a bike ride',
      },
    },
    {
      name: 'Isabella Harris',
      rating: 2,
      date: new Date(2023, 11, 12),
      text: 'Not impressed, returning the product.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/12.jpg',
        alt: 'Isabella Harris at a restaurant',
      },
    },
    {
      name: 'Alexander Clark',
      rating: 2.5,
      date: new Date(2023, 0, 13),
      text: 'Looks good but uncomfortable.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/13.jpg',
        alt: 'Alexander Clark at a conference',
      },
    },
    {
      name: 'Charlotte Lewis',
      rating: 3.5,
      date: new Date(2023, 1, 14),
      text: 'Expected more for the price.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/14.jpg',
        alt: 'Charlotte Lewis at a bookstore',
      },
    },
    {
      name: 'Benjamin Walker',
      rating: 3.5,
      date: new Date(2023, 2, 15),
      text: 'Not as advertised.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/15.jpg',
        alt: 'Benjamin Walker at a workshop',
      },
    },
    {
      name: 'Amelia Robinson',
      rating: 3,
      date: new Date(2023, 3, 16),
      text: 'It’s okay, nothing special.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/16.jpg',
        alt: 'Amelia Robinson at a garden',
      },
    },
    {
      name: 'Lucas Scott',
      rating: 2.5,
      date: new Date(2023, 4, 17),
      text: 'Good but could be better.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/17.jpg',
        alt: 'Lucas Scott at a beach',
      },
    },
    {
      name: 'Harper Young',
      rating: 3,
      date: new Date(2023, 5, 18),
      text: 'Does the job, but nothing outstanding.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/18.jpg',
        alt: 'Harper Young at a hiking trail',
      },
    },
    {
      name: 'Henry King',
      rating: 3.5,
      date: new Date(2023, 6, 19),
      text: 'Pretty decent, would consider buying again.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/19.jpg',
        alt: 'Henry King at a park',
      },
    },
    {
      name: 'Evelyn Wright',
      rating: 4,
      date: new Date(2023, 7, 20),
      text: 'Really good quality, would recommend.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/20.jpg',
        alt: 'Evelyn Wright at a zoo',
      },
    },
    {
      name: 'Michael Perez',
      rating: 4.5,
      date: new Date(2023, 8, 21),
      text: 'Amazing! Surpassed all expectations.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/21.jpg',
        alt: 'Michael Perez at an art gallery',
      },
    },
    {
      name: 'Abigail Campbell',
      rating: 5,
      date: new Date(2023, 9, 22),
      text: 'Absolutely perfect. Will buy again.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/22.jpg',
        alt: 'Abigail Campbell at a music festival',
      },
    },
    {
      name: 'Daniel Parker',
      rating: 0,
      date: new Date(2023, 10, 23),
      text: 'Disappointed with the purchase.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/23.jpg',
        alt: 'Daniel Parker at a conference',
      },
    },
    {
      name: 'Mila Turner',
      rating: 0.5,
      date: new Date(2023, 11, 24),
      text: 'Looks good but lacks functionality.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/24.jpg',
        alt: 'Mila Turner at a sports event',
      },
    },
    {
      name: 'David Phillips',
      rating: 1,
      date: new Date(2023, 0, 25),
      text: 'Not worth the price.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/25.jpg',
        alt: 'David Phillips at a tech expo',
      },
    },
    {
      name: 'Ella Adams',
      rating: 1.5,
      date: new Date(2023, 1, 26),
      text: 'Did not meet my expectations.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/26.jpg',
        alt: 'Ella Adams at a cafe',
      },
    },
    {
      name: 'Joseph Baker',
      rating: 2,
      date: new Date(2023, 2, 27),
      text: 'Average product, nothing special.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/27.jpg',
        alt: 'Joseph Baker at a shopping mall',
      },
    },
    {
      name: 'Aria Nelson',
      rating: 2.5,
      date: new Date(2023, 3, 28),
      text: 'Good value for money.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/28.jpg',
        alt: 'Aria Nelson at a beach resort',
      },
    },
    {
      name: 'Matthew Carter',
      rating: 3,
      date: new Date(2023, 4, 29),
      text: 'Does what it says on the tin.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/men/29.jpg',
        alt: 'Matthew Carter at a theme park',
      },
    },
    {
      name: 'Scarlett Mitchell',
      rating: 3.5,
      date: new Date(2023, 5, 30),
      text: 'Satisfied with the product, will recommend.',
      avatar: {
        src: 'https://randomuser.me/api/portraits/women/30.jpg',
        alt: 'Scarlett Mitchell at a nature reserve',
      },
    },
  ],
};
const reviewSectionNoReviews = {
  reviews: [],
};

export { reviewSectionDefault, reviewSectionNoReviews };
