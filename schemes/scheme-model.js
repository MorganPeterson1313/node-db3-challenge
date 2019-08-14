const Schemes = require('../data/db-config');


module.exports ={
find,
findById,
findSteps,
 add,
// addStep,
update,
remove


}

function find (){
    return Schemes('schemes');
}

function findById (id){
    return Schemes('schemes')
            .where({id})
            .first();

}

function findSteps (scheme_id){
        return Schemes('steps as s')
        .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
                .join('schemes as sc ', 's.id', 'sc.scheme_id')
                
                .where({scheme_id});
}

async function add (scheme){
    const [id] = await Schemes('schemes').insert(scheme);
    return findById(id);

}


async function update(changes, id) {
    await Schemes('schemes')
      .where({ id })
      .update(changes);
  
    // returns new user
    return findById(id);
  }



  function remove(id) {
    // returns removed count
    return Schemes('schemes')
      .where({ id })
      .del();
  }