export class newsData{
    Name: String;
    Descraption: String;
    ImageUrl: String;
    ICatagory: String;
    date:String;
    constructor(private name, private Desc, private Cate, private da){
        this.Name= name;
        this.Descraption= Desc;
        this.ICatagory=Cate;
        this.date=da;
    }
}