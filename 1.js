function getBiodataSaya(){
    let biodata = {
        name: "Nursyahid",
        age: 21,
          address: "Jl. Sakura IV, Mataram NTB",
          hobbies: ["Learning", "Travelling", "Coding"],
          is_married: false,
          list_school: [{name:"SDN Peras", year_in: 2005, year_out: 2011, major: null},
                      {name:"SMPN 1 Praya Timur", year_in: 2011, year_out: 2014, major: null},
                      {name:"SMKN 2 Praya Tengah", year_in: 2014, year_out: 2017, major: "Teknik Audio Video"},
                      {name:"Wearnes Malang", year_in: 2017, year_out: 2018, major: "Bisnis Ekspor Impor"}],
          skills: [{skill_name: "C++", level: "advanced"},
                 {skill_name: "JavaScript", level: "beginner"},
                 {skill_name: "PHP", level: "beginner"},
                 {skill_name: "ReactJs", level: "beginner"},
                 {skill_name: "VueJs", level: "beginner"},
                 {skill_name: "HTML", level: "advanced"},
                 {skill_name: "CSS", level: "advanced"}],
          interest_in_coding: true
    }
    
    let convertToJson = JSON.stringify(biodata)
    return convertToJson
    }
    
    console.log(getBiodataSaya())