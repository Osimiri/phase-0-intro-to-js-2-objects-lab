
const employee = {
    name: "Mark Bunyon",
    streetAddress: "132 Street Ave",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...employee};
    newObj[key] = value;

    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee , key, value){
    const newObj = employee;
    newObj[key] = value
    return newObj;
};

function deleteFromEmployeeByKey(employee,name){
    const newObj = {...employee}
    delete newObj[name]
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee,name){
    const employeeNew = employee
    const newObj = employeeNew
    delete newObj[name]
    return newObj;
};

