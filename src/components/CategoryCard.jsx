export default function CategoryCard({ category }){
  return (
    <div className="card">
      <h3 style={{marginTop:8}}>{category.name}</h3>
      <p style={{color:"#444"}}>{category.description}</p>
    </div>
  );
}
