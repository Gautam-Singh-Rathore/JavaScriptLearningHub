// Method to find the student with the least and highest total

var details = {
    data: [],
    addStudent: function (nam, mat, sci, eng) {
      var obj = {
        name: nam,
        maths: mat,
        science: sci,
        english: eng,
      };
      this.data.push(obj);
    },
    lowScore: function () {
      var pad_min = Infinity;
      var lowStudent;
      for (var i = 0; i < this.data.length; i++) {
        var current = this.data[i];
        var total = current.maths + current.science + current.english;
        if (total < pad_min) {
          pad_min = total;
          lowStudent = current;
        }
      }
      console.log(lowStudent);
    },
  
    highScore: function () {
      var pad_min = -Infinity;
      var highStudent;
      for (var i = 0; i < this.data.length; i++) {
        var current = this.data[i];
        var total = current.maths + current.science + current.english;
        if (total > pad_min) {
          pad_min = total;
          highStudent = current;
        }
      }
      console.log(highStudent);
    },
  };
  
  details.addStudent("Shubham", 10, 20, 30);
  details.addStudent("Rahul", 15, 25, 35);
  details.addStudent("Rohit", 20, 30, 40);
  
  // console.log(details.data);
  console.log("LOW SCORE");
  details.lowScore();
  console.log("HIGH SCORE");
  details.highScore();
  