// Class & Encapsulation
class Course {
  #name;
  #duration;

  constructor(name, duration) {
    this.#name = name;
    this.#duration = duration;
  }

  getDetails() {
    return `${this.#name} - ${this.#duration} hours`;
  }
}

//  Inheritance
class VideoCourse extends Course {
  constructor(name, duration, videoQuality) {
    super(name, duration);
    this.videoQuality = videoQuality;
  }

  // Polymorphism (Overriding method)
  getDetails() {
    return `${super.getDetails()} | Video: ${this.videoQuality}`;
  }
}

// Another class to show Abstraction
class CourseManager {
  constructor() {
    this.courseList = [];
  }

  addCourse(course) {
    this.courseList.push(course);
  }

  displayCourses() {
    const ul = document.getElementById("courseList");
    this.courseList.forEach(course => {
      const li = document.createElement("li");
      li.textContent = course.getDetails(); 
      ul.appendChild(li);
    });
  }
}

const manager = new CourseManager();

const course1 = new Course("HTML & CSS", 10);
const course2 = new VideoCourse("JavaScript Advanced", 20, "1080p");

manager.addCourse(course1);
manager.addCourse(course2);

manager.displayCourses();
