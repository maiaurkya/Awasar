const sql = require("./db.js");

// constructor
const Course = function(course) {
  this.title = course.title;
  this.topic = course.topic;
  this.short_desc = course.short_desc;
  this.desc = course.desc;
  this.duration = course.duration;
  this.category_id = course.category_id;
  this.topic_id = course.topic_id;
  this.level = course.level;
  this.author_id = course.author_id;
  this.enrolled = course.enrolled;
  this.ratting = course.ratting;
  this.created_on = course.created_on;
  this.modified_on = course.modified_on;
};

Course.create = (newCourse, result) => {
  sql.query("INSERT INTO customers SET ?", newCourse, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCourse });
    result(null, { id: res.insertId, ...newCourse });
  });
};

Course.findById = (courseId, result) => {
  sql.query("SELECT cd.*,concat(ad.first_name, ' ',ad.last_name) as authorName, ad.shot_name as authorShortName, cat_d.category as categories, td.title as topic_title  FROM Course_details as cd left join author_details as ad on ad.id = cd.author_id left join category_details as cat_d on cat_d.id= cd.category_id left join topic_details as td on td.id = cd.topic_id  WHERE cd.id = ? ",[courseId] , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
	   let topic_id = res[0]['topic_id'].split(',');
	   res[0]['topicsList']= [];	
	   sql.query("SELECT * from topic_details WHERE id in (?) ",[topic_id] , (err, res1) => {
	    if (err) {
	      console.log("error: ", err);
	      result(err, null);
	      return;
	    }
	    if (res1.length) {
		res[0]['topicsList'] =  res1;
		result(null, res[0]);
	    }else{
		console.log("Not Found!");
		result(null, res[0]);
	    }
	  });  
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Course.findTopicsById = (courseId, result) => {
  sql.query("SELECT cd.*,concat(ad.first_name, ' ',ad.last_name) as authorName, ad.shot_name as authorShortName, cat_d.category as categories, td.title as topic_title  FROM Course_details as cd left join author_details as ad on ad.id = cd.author_id left join category_details as cat_d on cat_d.id= cd.category_id left join topic_details as td on td.id = cd.topic_id  WHERE cd.id = ? ",[courseId] , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
           let topic_id = res[0]['topic_id'].split(',');
           res[0]['topicsList']= [];
           sql.query("SELECT * from topic_details WHERE id in (?) ",[topic_id] , (err, res1) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
            if (res1.length) {
                res[0] =  res1;
                result(null, res[0]);
            }else{
                console.log("Not Found!");
                result(null, res[0]);
            }
          });
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Course.getAll = result => {
console.log("QQQQQQQQQQQQQQQQ");
  sql.query("SELECT cd.*,concat(ad.first_name, ' ',ad.last_name) as authorName, ad.shot_name as authorShortName, cat_d.category as categories, td.title as topic_title  FROM Course_details as cd left join author_details as ad on ad.id = cd.author_id left join category_details as cat_d on cat_d.id= cd.category_id left join topic_details as td on td.id = cd.topic_id", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("courses: ", res);
    result(null, res);
  });
};


Course.getAllDetails = result => {
  sql.query("SELECT cd.*,concat(ad.first_name, ' ',ad.last_name) as authorName, ad.shot_name as authorShortName, cat_d.category as categories, td.title as topic_title, group_concat(tld.id,';',tld.title,';',tld.type, ';', tld.duration, ';',tld.link) as topic_list  FROM Course_details as cd left join author_details as ad on ad.id = cd.author_id left join category_details as cat_d on cat_d.id= cd.category_id left join topic_details as td on td.id = cd.topic_id left join topic_list_details as tld on tld.topic_id = td.id", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("courses: ", res);
    result(null, res);
  });
};

Course.updateById = (id, course, result) => {
  sql.query(
    "UPDATE Course_details SET email = ?, name = ?, active = ? WHERE id = ?",
    [course.email, course.name, course.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...course });
      result(null, { id: id, ...course });
    }
  );
};

Course.remove = (id, result) => {
  sql.query("DELETE FROM Course_details WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted course with id: ", id);
    result(null, res);
  });
};

Course.removeAll = result => {
  sql.query("DELETE FROM Course_details", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Course;

