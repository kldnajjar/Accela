export function getAge(birthday_date) {
  let now = new Date();

  let years_now = now.getYear();
  let month_now = now.getMonth();
  let date_now = now.getDate();

  let years_dob = birthday_date.getYear();
  let month_dob = birthday_date.getMonth();
  let date_dob = birthday_date.getDate();

  let age = {};
  let age_string = "";
  let years_string = "";
  let month_string = "";
  let days_string = "";

  let year_age = null;
  let month_age = null;
  let date_age = null;

  year_age = years_now - years_dob;

  if (month_now >= month_dob) month_age = month_now - month_dob;
  else {
    year_age--;
    month_age = 12 + month_now - month_dob;
  }

  if (date_now >= date_dob) date_age = date_now - date_dob;
  else {
    month_age--;
    date_age = 31 + date_now - date_dob;

    if (month_age < 0) {
      month_age = 11;
      year_age--;
    }
  }

  age = {
    years: year_age,
    months: month_age,
    days: date_age,
  };

  if (age.years > 1) years_string = " years";
  else years_string = " year";
  if (age.months > 1) month_string = " months";
  else month_string = " month";
  if (age.days > 1) days_string = " days";
  else days_string = " day";

  if (age.years > 0 && age.months > 0 && age.days > 0)
    age_string =
      age.years +
      years_string +
      ", " +
      age.months +
      month_string +
      ", and " +
      age.days +
      days_string +
      " old.";
  else if (age.years === 0 && age.months === 0 && age.days > 0)
    age_string = "Only " + age.days + days_string + " old!";
  else if (age.years > 0 && age.months === 0 && age.days === 0)
    age_string = age.years + years_string + " old. Happy Birthday!!";
  else if (age.years > 0 && age.months > 0 && age.days === 0)
    age_string =
      age.years + years_string + " and " + age.months + month_string + " old.";
  else if (age.years === 0 && age.months > 0 && age.days > 0)
    age_string =
      age.months + month_string + " and " + age.days + days_string + " old.";
  else if (age.years > 0 && age.months === 0 && age.days > 0)
    age_string =
      age.years + years_string + " and " + age.days + days_string + " old.";
  else if (age.years === 0 && age.months > 0 && age.days === 0)
    age_string = age.months + month_string + " old.";
  else age_string = null;

  return age_string;
}

const exportedObject = {
  getAge,
};

export default exportedObject;
