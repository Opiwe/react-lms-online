const Course = require('./mockCoursesTest');

const mockCoursesTest = async (req, res) => {
    await addTesting();
    res.json({message: 'Successfully Added Testing Courses'});
};

const addTesting = async (req, res) => {
    try {
        await Course.insertMany([
            {
                name: "Basic Computer Skills",
                image: "https://speccon.co.za/wp-content/uploads/2023/10/Computer-Skills-1-1024x1024.png",
                availableSeats: 781,
                price: "70",
                videoLink: "https://www.youtube.com/watch?v=mybYCf4Mov4",
                description: "This course explains what computer is and what it does, looking at the different elements of a computer, including the hardware and software components.",
                instructorName: "Watson T.",
                instructorEmail: "watson@taylor.com",
                status: "approved",
                submitted: "2024-02-28T20:01:12.168Z",
                totalEnrolled: 9,
                reason: null,
            },
            {
                name: "EntrepreneurIial Skills",
                "image": "https://speccon.co.za/wp-content/uploads/2023/10/Entrepreneurial-Skills-1-1024x1024.png",
                availableSeats: 516,
                price: "50",
                videoLink: "https://www.youtube.com/watch?v=lJjILQu2xM8",
                description: "Entrepreneurial skills are essential qualities and abilities that enable individuals to successfully identify opportunities, take risks, and create and manage businesses.",
                instructorName: "Teylor Len",
                instructorEmail: "teylor@len.com",
                status: "approved",
                submitted: "2024-02-28T20:01:40.168Z",
                totalEnrolled: 4,
                reason: null,
            },
            {
                name: "Project Management",
                image: "https://speccon.co.za/wp-content/uploads/2023/10/Project-Management-Short-Programme-1-1024x1024.png",
                availableSeats: 782,
                price: "50",
                videoLink: "https://www.youtube.com/watch?v=Jk-JwtScIlw",
                description: "Project management involves the planning, organizing, and overseeing of tasks, resources, and timelines to achieve specific goals and deliverables within a set budget and timeframe.",
                instructorName: "Marry Hun",
                instructorEmail: "mary@hun.com",
                status: "approved",
                submitted: "2024-02-28T20:01:40.168Z",
                totalEnrolled: 8,
                reason: null,
            },
            {
                name: "Business Finance",
                image: "https://speccon.co.za/wp-content/uploads/2023/10/Business-Finance-1-1024x1024.png",
                availableSeats: 516,
                price: "50",
                videoLink: "https://www.youtube.com/watch?v=T3l51Psce3c",
                description: "Business finance encompasses the management of financial resources within an organization to achieve its goals and objectives.",
                instructorName: "Ema Aliq",
                instructorEmail: "ema@aliq.com",
                status: "approved",
                submitted: "2024-02-28T20:01:40.168Z",
                totalEnrolled: 4,
                reason: null,
            },
            {
                name: "Report Writing",
                image: "https://speccon.co.za/wp-content/uploads/2023/10/Report-Writing-Short-Programme-1-1024x1024.png",
                availableSeats: 516,
                price: "50",
                videoLink: "https://www.youtube.com/results?search_query=report+writing",
                description: "Report writing involves the process of gathering, analyzing, and presenting information in a structured format to convey findings, and recommendations.",
                instructorName: "Marry Hun",
                instructorEmail: "mary@hun.com",
                status: "approved",
                submitted: "2024-02-28T20:01:40.168Z",
                totalEnrolled: 4,
                reason: null,
            },
            {
                name: "Personal Development Skills",
                image: "https://speccon.co.za/wp-content/uploads/2023/10/Personal-development-skills-1-1024x1024.png",
                availableSeats: 20,
                price: "120",
                videoLink: "https://www.youtube.com/watch?v=De-bLfEUeLE",
                description: "Personal development skills refer to the abilities and qualities that individuals cultivate to enhance their personal growth.",
                instructorName: "Your Assistant",
                instructorEmail: "help.yourassistant@gmail.com",
                status: "approved",
                submitted: "2024-03-02T04:29:29.375Z",
                totalEnrolled: 0,
                reason: null,
            },
        ]);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {mockCoursesTest, addTesting};