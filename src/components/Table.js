import './Table.css'

export default function Table(){
    return (
    <div className = "Table">
        <table >
    <thead>
    <tr>
      <th>Team</th>
      <th>City</th>
      <th>Home Ground</th>
      <th>Debut</th>
      <th>Owner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chennai Super Kings</td>
      <td>Chennai,Tamilnadu</td>
      <td>M.A.Chidambaram Stadium</td>
      <td>2008</td>
      <td><ul><li>N.Srinivasan</li></ul></td>
    </tr>
    <tr>
      <td>Delhi Capitals</td>
      <td>New Delhi,Delhi</td>
      <td>Arun Jaitly Stadium</td>
      <td></td>
      <td><ul><li>Saijan Jindal</li><li>G.M.Rao</li></ul></td>
    </tr>
    <tr>
      <td>Gujarat Titans</td>
      <td>Ahmedabad,Gujarath</td>
      <td>Narendra Modi Stadium</td>
      <td>2022</td>
      <td><ul><li>Steve koltes</li><li>Juhi Chawla</li><li>Jay mehta</li></ul></td>
    </tr>
    <tr>
      <td>Kolkata Knight Riders</td>
      <td>Kolkata,West Bengal</td>
      <td>Eden Gardens</td>
      <td>2008</td>
      <td><ul><li>Shah Rukh Khan</li><li>Juhi Chawla</li><li>Jay mehta</li></ul></td>
    </tr>
    <tr>
        <td>Lucknow Super Giants</td>
        <td>Lucknow</td>
        <td>BRSABV Ekana Cricket Stadium</td>
        <td>2022</td>
        <td><ul><li>Sanjiv Goenka</li></ul></td>
      </tr>
  </tbody>
</table>
    </div>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}