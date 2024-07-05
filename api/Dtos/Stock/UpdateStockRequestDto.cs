using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Stock
{
    public class UpdateStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage = "Symbol cant be over 10 characters")]
        public string Symbol { get; set; } = String.Empty;

        [Required]
        [MaxLength(15, ErrorMessage = "CompanyName cant be over 15 characters")]
        public string CompanyName { get; set; } = String.Empty;

        [Required]
        [Range(1, 10000000000)]
        public decimal Purchase { get; set; }

        [Required]
        [Range(0.001, 100)]
        public decimal LastDiv { get; set; }

        [Required]
        [MaxLength(15, ErrorMessage = "Industry cant be over 15 characters")]
        public string Industry { get; set; } = String.Empty;

        [Required]
        [Range(1, 50000000000)]
        public long MarketCap { get; set; }
    }
}