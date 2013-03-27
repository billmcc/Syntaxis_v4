
guidedModel =// @startlock
{
	OrderItemOptions :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				if(currentUser() != null){
					return ds.OrderItemOptions.all();
				} else {
					return false;
				}
			}// @startlock
		}
	},
	OrderItem :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				if(currentUser() != null){
					return ds.OrderItem.all();
				} else {
					return false;
				}
			}// @startlock
		}
	},
	OrderMenu :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				if(currentUser() != null){
					return ds.OrderMenu.all();
				} else {
					return false;
				}

			}// @startlock
		}
	},
	Order :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				if(currentUser() != null){
					return ds.Order.all();
				} else {
					return false;
				}

			}// @startlock
		}
	},
	Person :
	{
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				if(currentUser() != null){
					return ds.Person.all();
				} else {
					return false;
				}
				
				}
			}// @startlock
		}
	}
};// @endlock
