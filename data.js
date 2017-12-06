const data = [{
    Id: 2,
    Name: "Group1",
    GroupType: 2,
    ParentId: 4,
    GroupKey: "group1",
},
{
    Id: 4,
    Name: "Group3",
    GroupType: 2,
    ParentId: 5,
    GroupKey: "group1"
},
{
    Id: 3,
    Name: "Group2",
    GroupType: 2,
    ParentId: 1,
    GroupKey: "group2"
},
{
    Id: 5,
    Name: "Collection 1",
    GroupType: 1,
    ParentId: 3,
    GroupKey: null
},
{
    Id: 6,
    Name: "Collection 1",
    GroupType: 1,
    ParentId: 1,
    GroupKey: null
},
{
    Id: 7,
    Name: "Collection 1",
    GroupType: 1,
    ParentId: 5,
    GroupKey: null
}
];

module.exports = {data};